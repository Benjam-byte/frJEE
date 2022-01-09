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
  selector: 'app-home-etu',
  templateUrl: './home-etu.component.html',
  styleUrls: ['./home-etu.component.scss']
})
export class HomeEtuComponent implements OnInit {

  data: Exam[] = [];

  constructor(private authServ : AuthService) {
    this.getQcm();
   }

  ngOnInit(): void {
  }


  initData(data: Exam[]) {
    for (var i = 0; i < data.length; i++){
      this.data.push(data[i]);
    }
    
  }


  getQcm() {
    var config : AxiosRequestConfig = {
      method: 'get',
      url: 'http://localhost:8080/projetqcm/data/qcmencours',
      headers: { 
        'Authorization': 'Bearer '+this.authServ.getJWT()
      },
    };
    axios(config)
        .then(response => this.initData(response.data) );    
  }


}
