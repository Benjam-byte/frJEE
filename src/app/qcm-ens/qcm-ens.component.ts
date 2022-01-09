import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios, { AxiosRequestConfig } from 'axios';
import { AuthService } from '../auth.service';

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

  constructor(private route : ActivatedRoute, private authServ : AuthService) { 
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
    var config : AxiosRequestConfig = {
      method: 'get',
      url: 'http://localhost:8080/projetqcm/data/qcm/'+this.id+"/inscrits",
      headers: { 
        'Authorization': 'Bearer '+this.authServ.getJWT()
      },
    };
    axios(config)
        .then(response => this.initData(response.data) );    
  }

  deleteAll() {
    var config : AxiosRequestConfig = {
      method: 'delete',
      url: 'http://localhost:8080/projetqcm/data/qcm/' + this.id + "/inscrits",
      headers: { 
        'Authorization': 'Bearer '+this.authServ.getJWT()
      },
    };
    axios(config)
      .then(response => console.log(response));
    this.listInscrit = [];
  }

  delete(etuId: number) {
    var config : AxiosRequestConfig = {
      method: 'delete',
      url: 'http://localhost:8080/projetqcm/data/qcm/' + this.id + "/inscrits/"+etuId,
      headers: { 
        'Authorization': 'Bearer '+this.authServ.getJWT()
      },
    };
    axios(config)
      .then(response => console.log(response));
    this.delEtu(etuId);
  }


  delEtu(etuId : number) {
    for (var i = 0; i < this.listInscrit.length; i++){
      if (this.listInscrit[i].id === etuId) {
        this.listInscrit.splice(i, 1);
      }
    }
  }
}
