import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { InterestsComponent } from './components/interests/interests.component';
import { ContactComponent } from './components/contact/contact.component';
import { LandingComponent } from './components/landing/landing.component';

const appRoutes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'interests', component: InterestsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '',
    redirectTo: '/landing',
    pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    InterestsComponent,
    ContactComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
