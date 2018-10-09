import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  private url_repositories: string = 'https://api.github.com/users/patricksalguero/repos?sort=updated';

  constructor(
    private http: HttpClient
  ) { }

  getAllRepositories() {
    return this.http.get(this.url_repositories);
  }
}
