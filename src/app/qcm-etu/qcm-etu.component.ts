import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qcm-etu',
  templateUrl: './qcm-etu.component.html',
  styleUrls: ['./qcm-etu.component.scss']
})
export class QcmEtuComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  valider() {
    if (confirm("êtes vous sur de vouloir remettre votre qcm ?")) {
      this.router.navigate(['/']);
    }
  }

}
