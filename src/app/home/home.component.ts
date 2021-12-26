import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(public authServ : AuthService) { }

  ngOnInit(): void {
  }



}
