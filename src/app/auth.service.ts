import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private user: string = "";
  private mail: string = '';
  private password: string = '';


  getUser() {
    return this.user;
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
    }
  }

  deconnection() {
    this.user = "";
    this.mail = '';
    this.password = '';
  }


}
