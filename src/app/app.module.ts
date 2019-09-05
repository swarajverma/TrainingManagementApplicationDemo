import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { OAuthModule } from 'angular-oauth2-oidc';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TrainingreportsComponent } from './global/trainingreports/trainingreports.component';
import { ModifycurriculumComponent } from './global/modifycurriculum/modifycurriculum.component';
import { AdminsecurityComponent } from './global/adminsecurity/adminsecurity.component';
import { GlobalinfoComponent } from './global/globalinfo/globalinfo.component';
import { TrainingcurriculumComponent } from './unit/trainingcurriculum/trainingcurriculum.component';
import { ProjectfilesComponent } from './unit/projectfiles/projectfiles.component';
import { UnitinformationComponent } from './unit/unitinformation/unitinformation.component';



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
    TrainingcurriculumComponent,
    ProjectfilesComponent,
    UnitinformationComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
