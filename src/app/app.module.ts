import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuestionComponent } from './question/question.component';
import { FiltersComponent } from './filters/filters.component';
import { FormAddComponent } from './form-add/form-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionComponent,
    FiltersComponent,
    FormAddComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
