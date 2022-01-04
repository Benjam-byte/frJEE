import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

interface Person {
  email: string,
  id: number,
  nickname: string,
}

@Component({
  selector: 'app-qcm-ens',
  templateUrl: './qcm-ens.component.html',
  styleUrls: ['./qcm-ens.component.scss']
})
export class QcmEnsComponent implements OnInit {

  listInscrit: Person[] = [];
  id: string |null;

  constructor(private route : ActivatedRoute) { 
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit(): void {
    this.getInscrit();
  }

  initData(data: Person[]) {
    for (var i = 0; i < data.length; i++){
      this.listInscrit.push(data[i]);
    }
    console.log(this.listInscrit);
  }

  
  getInscrit() {
    axios.get('http://localhost:8080/projetqcm/data/qcm/'+this.id+"/inscrits", {})
        .then(response => this.initData(response.data) );    
  }

  deleteAll() {
    axios.delete('http://localhost:8080/projetqcm/data/qcm/' + this.id + "/inscrits", {})
      .then(response => console.log(response));
      
  }

}
