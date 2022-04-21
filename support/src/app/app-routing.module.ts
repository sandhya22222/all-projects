import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { ListTicketsComponent } from './components/list-tickets/list-tickets.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},

  {path:'create-ticket' ,component:CreateTicketComponent},

  {path:'list-tickets' ,component:ListTicketsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
