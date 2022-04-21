import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/materials/materials.module';
import { LoginComponent } from './components/login/login.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { ListTicketsComponent } from './components/list-tickets/list-tickets.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainContainerComponent,
    HeaderComponent,
    CreateTicketComponent,
    ListTicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
