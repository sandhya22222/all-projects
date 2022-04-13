import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProfileComponent } from './components/detail-profile/detail-profile.component';
import { HomeComponent } from './components/home/home.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { ListProfilesComponent } from './components/list-profiles/list-profiles.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { ServicesComponent } from './components/services/services.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'course', component: ListCourseComponent },

  { path: 'services', component: ServicesComponent },

  { path: 'contact', component: ListContactComponent },

  { path: 'login', component: LoginComponent },

  { path: 'profile', component: ListProfilesComponent },

  { path: 'profile/:pid', component: DetailProfileComponent },

  { path: 'rxjs', component: ReactiveComponent },

  { path: 'template-form', component: TemplateFormComponent },

  { path: '**', component: NotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
