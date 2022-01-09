import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios, { AxiosRequestConfig } from 'axios';
import { AuthService } from '../auth.service';

interface ExamCopie {
  debut : string,
  examID : number,
  id : number,
  questions : QuestionCopie []
}

interface QuestionCopie {
  _id : number,
  copieChoix: ChoixCopie[],
  enonce : string
}

interface ChoixCopie{
  _id: number,
  cochee: boolean,
  enonce : string,
}


@Component({
  selector: 'app-qcm-etu',
  templateUrl: './qcm-etu.component.html',
  styleUrls: ['./qcm-etu.component.scss']
})
export class QcmEtuComponent implements OnInit {

  idEtu: number = 10;
  idExam: string | null;
  exam!: ExamCopie;
  QuestionTab: QuestionCopie[] = [];

  test: boolean = true;

  constructor(private router: Router, private route : ActivatedRoute,private authServ : AuthService) {
    this.idExam = this.route.snapshot.paramMap.get('id');
    this.getExam();
   }

  ngOnInit(): void {
  }

  valider() {
    if (confirm("êtes vous sur de vouloir remettre votre qcm ?")) {
      this.router.navigate(['/']);
    }
  }


  getExam() {
    var config : AxiosRequestConfig = {
      method: 'get',
      url: 'http://localhost:8080/projetqcm/data/qcmencours/'+ this.idExam,
      headers: { 
        'Authorization': 'Bearer '+this.authServ.getJWT()
      },
    };
    axios(config).then(response => { this.exam = response.data; this.QuestionTab = this.exam.questions; console.log(response) }); 
  }


  coche(idQ: number, idC: number, checked: boolean) { /// CONTINUER LE COCHE ICI
    if (checked) { // ATTENTION LA REQUETE N4EST PAS LA MEME POUR COCHER ET DECOCHER 
      var config1 : AxiosRequestConfig = {
        method: 'post',
        url: 'http://localhost:8080/projetqcm/data/qcmencours/'+ this.idExam + "/questions/" + idQ + "/choix/" + idC,
        headers: { 
          'Authorization': 'Bearer '+this.authServ.getJWT()
        },
      };
      axios(config1)
        .then(response => console.log(response));
    } else { // ici on decoche 
      var config2 : AxiosRequestConfig = {
        method: 'delete',
        url: 'http://localhost:8080/projetqcm/data/qcmencours/'+ this.idExam + "/questions/" + idQ + "/choix/" + idC,
        headers: { 
          'Authorization': 'Bearer '+this.authServ.getJWT()
        },
      };
      axios(config2)
        .then(response => console.log(response));
    }
  }

}
