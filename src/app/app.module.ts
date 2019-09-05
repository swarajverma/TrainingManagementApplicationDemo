import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { OAuthModule } from 'angular-oauth2-oidc';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TrainingreportsComponent } from './global/trainingreports/trainingreports.component';
import { ModifycurriculumComponent } from './global/modifycurriculum/modifycurriculum.component';
import { AdminsecurityComponent } from './global/adminsecurity/adminsecurity.component';
import { GlobalinfoComponent } from './global/globalinfo/globalinfo.component';



export function onAuthRequired({ oktaAuth, router }) {
  router.navigate(['/login']);
}

const ROUTES: Routes=[
  {path:'globalinformation', component: GlobalinfoComponent,
  children: [
    {path:'trainingreports', component: TrainingreportsComponent},
    {path:'modifycurriculum', component: ModifycurriculumComponent},
    {path:'adminsecurity', component: AdminsecurityComponent},
    {path:'', redirectTo:'trainingreports', pathMatch:'full'},
  ]
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TrainingreportsComponent,
    ModifycurriculumComponent,
    AdminsecurityComponent,
    GlobalinfoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    OAuthModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
