import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios, { AxiosRequestConfig } from 'axios';
import { AuthService } from '../auth.service';

interface Person2 {
  _id: number,
  birthdate: string,
  email: string,
  enseignant: boolean,
  exam: any,
  nickname: string,
  passwordHash: string,
}

interface Person {
  email: string,
  id: number,
  nickname: string,
}



@Component({
  selector: 'app-add-etu',
  templateUrl: './add-etu.component.html',
  styleUrls: ['./add-etu.component.scss']
})
export class AddEtuComponent implements OnInit {

  listPerson: Person2[] = [];
  listFuturPerson: Person2[] = [];
  listAlreadyInscrit: Person[] = [];
  checkTab: boolean[] = [];
  id: string | null;

  isCoched: boolean = false;

  constructor(private route: ActivatedRoute, private authServ: AuthService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }



  ngOnInit(): void {
    this.getData();
  }

  getQcm() {
    var config: AxiosRequestConfig = {
      method: 'get',
      url: 'http://localhost:8080/projetqcm/data/qcm',
      headers: {
        'Authorization': 'Bearer ' + this.authServ.getJWT()
      },
    };

    axios(config).then(response => this.initData(response.data));
  }



  addOne(person: Person2) {
    var config: AxiosRequestConfig = {
      method: 'patch',
      url: 'http://localhost:8080/projetqcm/data/qcm/' + this.id + "/inscrits",
      headers: {
        'Authorization': 'Bearer ' + this.authServ.getJWT()
      },
      data: [person._id]
    };
    axios(config).then(response => { console.log(response); this.delEtu(person); this.initTcheckTab(this.listPerson); })
      .catch(function (error) {
        console.log(error);
      });
  }

  delEtu(person: Person2) {
    for (var i = 0; i < this.listPerson.length; i++) {
      if (this.listPerson[i] === person) {
        this.listPerson.splice(i, 1);
      }
    }
  }

  addSelect() {
    var tabId: number[] = [];
    for (var i = 0; i < this.checkTab.length; i++) {
      if (this.checkTab[i]) {
        tabId.push(this.listPerson[i]._id);
      }
    }
    var config: AxiosRequestConfig = {
      method: 'patch',
      url: 'http://localhost:8080/projetqcm/data/qcm/' + this.id + "/inscrits",
      headers: {
        'Authorization': 'Bearer ' + this.authServ.getJWT()
      },
      data: tabId
    };
    axios(config).then(response => {
      console.log(response);
      for (var j = 0; j < tabId.length; j++) {
        this.delPerson(tabId[j]);
      }
      this.initTcheckTab(this.listPerson);
    })
      .catch(function (error) {
        console.log(error);
      });
  }

  delPerson(id: number) {
    for (var i = 0; i < this.listPerson.length; i++) {
      if (this.listPerson[i]._id === id) {
        this.listPerson.splice(i, 1);
      }
    }
  }


  replaceSelect() {
    var tabId: number[] = [];
    for (var i = 0; i < this.checkTab.length; i++) {
      if (this.checkTab[i]) {
        tabId.push(this.listPerson[i]._id);
      }
    }
    var config: AxiosRequestConfig = {
      method: 'put',
      url: 'http://localhost:8080/projetqcm/data/qcm/' + this.id + "/inscrits",
      headers: {
        'Authorization': 'Bearer ' + this.authServ.getJWT()
      },
      data: tabId
    };
    axios(config).then(response => {
      console.log(response);
      for (var j = 0; j < tabId.length; j++) {
        this.delPerson(tabId[j]);
      }
      this.initTcheckTab(this.listPerson);
    })
      .catch(function (error) {
        console.log(error);
      });

  }

  initTcheckTab(tab: any) {
    this.checkTab = [];
    for (var i = 0; i < tab.length; i++) {
      this.checkTab.push(false);
    }
  }


  selectAll() {
    if (this.isCoched) {
      for (var i = 0; i < this.checkTab.length; i++) {
        this.checkTab[i] = false;
      }
      this.isCoched = false;
    } else {
      for (var i = 0; i < this.checkTab.length; i++) {
        this.checkTab[i] = true;
      }
      this.isCoched = true;
    }
  }



  alreadyExist(id: number): boolean {
    var ans = false;
    for (var i = 0; i < this.listAlreadyInscrit.length; i++) {
      if (this.listAlreadyInscrit[i].id === id) {
        ans = true;
      }
    }
    return ans;
  }

  initListPerson() {
    for (var i = 0; i < this.listFuturPerson.length; i++) {
      if (!this.alreadyExist(this.listFuturPerson[i]._id)) {
        this.listPerson.push(this.listFuturPerson[i]);
      }
    }
    this.initTcheckTab(this.listPerson);
  }

  initData(data: Person2[]) {
    for (var i = 0; i < data.length; i++) {
      if (!data[i].enseignant) {
        this.listFuturPerson.push(data[i]);
      }
    }
  }

  initData2(data: Person[]) {
    for (var i = 0; i < data.length; i++) {
      this.listAlreadyInscrit.push(data[i]);
    }
  }


  getData() {
    var config: AxiosRequestConfig = {
      method: 'get',
      url: 'http://localhost:8080/projetqcm/data/qcm/' + this.id + "/inscrits",
      headers: {
        'Authorization': 'Bearer ' + this.authServ.getJWT()
      },
    };
    axios.get("http://localhost:8080/projetqcm/data/persons2", {})
      .then(response => {
        this.initData(response.data);
        axios(config)
          .then(response => {
            this.initData2(response.data);
            this.initListPerson();
          });
      });
  }


  getFuturInscrit() {
    axios.get("http://localhost:8080/projetqcm/data/persons2", {})
      .then(response => this.initData(response.data));
  }


  getAlreadyInscrit() {
    var config: AxiosRequestConfig = {
      method: 'get',
      url: 'http://localhost:8080/projetqcm/data/qcm/' + this.id + "/inscrits",
      headers: {
        'Authorization': 'Bearer ' + this.authServ.getJWT()
      },
    };
    axios(config).then(response => this.initData2(response.data));
  }

  getCheck(i: number, checked: boolean) {
    this.checkTab[i] = checked;
  }



}
