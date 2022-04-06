import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobComponent } from './job/job.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactComponent,
    JobListComponent,
    JobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
