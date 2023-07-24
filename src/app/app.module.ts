import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListBooksComponent } from './components/list-books/list-books.component';
// IMPORTACIONES DE ESTILOS BOOTSTRAP
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerModule, NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// IMPORTACIONS DE ESTILOS MATERIAL UI
import {MatBadgeModule} from '@angular/material/badge';


// IMPORTACIONES PARA MANEJO DE FORMULARIOS
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ListBooksComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    BrowserAnimationsModule,
    MatBadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
