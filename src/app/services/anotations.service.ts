import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnotationsService {

  private urlAnotation: string = '';

  constructor(
    private http: HttpClient
  ) { }

  getAnotations() {
    return this.http.get(environment.anotation_path_markdown);
  }
}
