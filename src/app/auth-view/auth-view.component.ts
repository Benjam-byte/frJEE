import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.scss']
})
export class AuthViewComponent implements OnInit {

  constructor(public authServ : AuthService,private router : Router) { }

  ngOnInit(): void {
  }

  authentification(mail: string, password: string) {
    this.authServ.authentification(mail, password);
    this.router.navigate(['/']);
  }

}
