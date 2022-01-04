import { isExpressionFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';


interface Exam{
  debut: string,
  duree: string,
  fin: string,
  id: number,
  nbInscrits: number,
  nbQuestions: number,
  title : string
}

@Component({
  selector: 'app-home-ens',
  templateUrl: './home-ens.component.html',
  styleUrls: ['./home-ens.component.scss']
})
export class HomeEnsComponent implements OnInit {

  data: Exam[] = [];

  constructor() {
    this.getQcm();
   }

  ngOnInit(): void {
  }


  initData(data: Exam[]) {
    for (var i = 0; i < data.length; i++){
      this.data.push(data[i]);
    }
    console.log(this.data);
  }

  
  getQcm() {
    axios.get('http://localhost:8080/projetqcm/data/qcm/1', {})
        .then(response => this.initData(response.data) );    
  }

}
