import { isExpressionFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Component, OnInit } from '@angular/core';
import axios, { AxiosRequestConfig } from 'axios';
import { AuthService } from '../auth.service';


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


  constructor(private authServ : AuthService) {
    this.getQcm();
   }

  ngOnInit(): void {
  }


  initData(data: Exam[]) {
    console.log(data);
    for (var i = 0; i < data.length; i++){
      this.data.push(data[i]);
    }
    
  }

  
  getQcm() {
    var config : AxiosRequestConfig = {
      method: 'get',
      url: 'http://localhost:8080/projetqcm/data/qcm',
      headers: { 
        'Authorization': 'Bearer '+this.authServ.getJWT()
      },
    };

    axios(config).then(response => this.initData(response.data) );    
  }

}
