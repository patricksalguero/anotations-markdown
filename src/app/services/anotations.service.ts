import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Person } from '../interfaces/Person';
import { Header } from '../interfaces/Header';

@Injectable({
  providedIn: 'root'
})
export class AnotationsService {

  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'Application/json'
  });
  private urlAnotation: string = '';

  constructor(
    private http: HttpClient
  ) { }

  getAnotations() {
    return this.http.get(environment.anotation_path_markdown);
  }

  savePerson(_person: Person) {
    const header: Header = new Header();
    header.ipclient = "128.0.0.1";
    header.hostname = "W7ITDATA01";

    const person: Person = new Person("Leonel", "Cortijo");


    const requestbody = {
      header: header,
      person: person
    };

    return requestbody;
    // return this.http.post(this.urlAnotation, , { headers: this.headers });
  }


}

