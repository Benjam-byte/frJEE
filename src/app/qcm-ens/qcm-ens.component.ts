import { Component, OnInit } from '@angular/core';
import axios from 'axios';

interface Person {
  _id: number,
  birthdate: string,
  email: string,
  nickname: string,
  passwordHash: string;
}

@Component({
  selector: 'app-qcm-ens',
  templateUrl: './qcm-ens.component.html',
  styleUrls: ['./qcm-ens.component.scss']
})
export class QcmEnsComponent implements OnInit {

  listInscrit: Person[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getInscrit();
  }

  getInscrit() {
    axios.get('http://localhost:8080/projetqcm/data/persons', {})
    .then( (response: any) => {
      this.listInscrit = response.data;
    })
    .catch(function (error: any) {
      console.log(error);
    });
  }

}
