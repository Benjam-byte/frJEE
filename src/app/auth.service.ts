import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private user: string = "";
  private mail: string = '';
  private password: string = '';
  private JWT: string='';


  getUser() {
    return this.user;
  }

  getJWT() {
    return this.JWT;
  }

  authentification(mail: string, password: string) {
    this.mail = mail;
    this.password = password;
    this.validate();
  }

  validate() {
    if (this.mail === 'etu@gmail.com' && this.password === "etu") {
      this.user = 'etu';
    } else if (this.mail === 'ens@gmail.com' && this.password === 'ens') {
      this.user = 'ens';
    } else {
      this.getConnection();
    }
  }


  getConnection() {
    axios.post("http://localhost:8080/projetqcm/data/login?email="+'"'+this.mail+'"'+"&passwd="+this.password, )
      .then(response => {
        this.JWT = response.data.jwt;
        if (response.data.enseignant) {
          this.user = 'ens';
        } else {
          this.user = 'etu';
        }
      });
  }

  deconnection() {
    this.user = "";
    this.mail = '';
    this.password = '';
  }


}
