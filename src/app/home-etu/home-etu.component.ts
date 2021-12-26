import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-home-etu',
  templateUrl: './home-etu.component.html',
  styleUrls: ['./home-etu.component.scss']
})
export class HomeEtuComponent implements OnInit {

  supprimeMoi: string = "stp frero oublie pas";
  date: boolean = false;

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
