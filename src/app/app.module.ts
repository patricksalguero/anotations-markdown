import { AnotationsService } from './services/anotations.service';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { MarkdownModule, MarkedOptions } from "ngx-markdown";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RepositoriesComponent } from "./components/repositories/repositories.component";
import { HomeComponent } from "./components/home/home.component";
import { RepositoriesService } from './services/repositories.service';
import { AnotationComponent } from './components/anotation/anotation.component';
import { APP_ROUTES } from './app.routes';
import { AnotationsComponent } from './components/anotations/anotations.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RepositoriesComponent,
    HomeComponent,
    AnotationComponent,
    AnotationsComponent,
    AboutmeComponent,
    ContactComponent
  ],
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
    }),
    APP_ROUTES
  ],
  providers: [
    AnotationsService,
    RepositoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
