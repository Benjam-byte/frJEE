import { Component, OnInit } from '@angular/core';
import axios, { AxiosRequestConfig } from 'axios';
import { AuthService } from '../auth.service';


interface Resultat {
  nbQuestion: number,
  nickname: string,
  note: number,
  pourcentage: number,
  title : string
}

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.scss']
})
export class ResultatComponent implements OnInit {


  idEtu: number = 10;
  data: Resultat[] = [];
  

  constructor(private authServ :AuthService) { 
    this.getExam();
  }

  ngOnInit(): void {
  }

  initData(data: Resultat[]) {
    for (var i = 0; i < data.length; i++){
      this.data.push(data[i]);
      this.data[i].pourcentage = this.data[i].pourcentage / 5;
    }
  }

 

  
    getExam() {
      var config : AxiosRequestConfig = {
        method: 'get',
        url: 'http://localhost:8080/projetqcm/data/qcmpasse/',
        headers: { 
          'Authorization': 'Bearer '+this.authServ.getJWT()
        },
      };
    axios(config).then(response => this.initData(response.data)); 
  }


}
