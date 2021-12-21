import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  supprimeMoi: string = "stp frero oublie pas";

  constructor() { }

  ngOnInit(): void {
  }

  getQcm() {
    axios.get('http://localhost:8080/projetqcm/data/persons', {})
        .then(function (response: any) {
          console.log(response);
        })
        .catch(function (error: any) {
          console.log(error);
        });
  }

}
