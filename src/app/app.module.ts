import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, RepositoriesComponent, HomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false
        }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
