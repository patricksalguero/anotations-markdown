import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnotationsService {

  constructor(
    private http: HttpClient
  ) { }

  getAnotations() {
    return this.http.get('../../../data/anotations.json');
  }
}
