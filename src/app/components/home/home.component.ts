import { Component, OnInit } from '@angular/core';
import { AnotationsService } from '../../services/anotations.service';
import { RepositoriesService } from 'src/app/services/repositories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public anotations: any[] = [];
  public repositories: any[] = [];

  constructor(
    private _anotation: AnotationsService,
    private _repositories: RepositoriesService
  ) { }

  ngOnInit() {
    this.getAllAnotations();
    this.getAllRepositories();
  }

  getAllAnotations() {
    this._anotation.getAnotations()
      .subscribe((result: any[]) => {
        console.log(result);
        this.anotations = result;
      });
  }

  getAllRepositories() {
    this._repositories.getAllRepositories()
      .subscribe((repositories: any[]) => {
        console.log(repositories);
        this.repositories = repositories;
      });
  }
}
