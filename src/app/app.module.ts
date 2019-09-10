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
import { TrainingcurriculumComponent } from './unit/trainingcurriculum/trainingcurriculum.component';
import { ProjectfilesComponent } from './unit/projectfiles/projectfiles.component';
import { UnitinformationComponent } from './unit/unitinformation/unitinformation.component';
import { UnittrainingreportComponent } from './unit/unittrainingreport/unittrainingreport.component';
import { BreadcrumbComponent } from './core/breadcrumb/breadcrumb.component';
import { HelpinfoComponent } from './help/helpinfo/helpinfo.component';
import { TrainingComponent } from './help/training/training.component';
import { FaqComponent } from './help/faq/faq.component';
import { ContactComponent } from './help/contact/contact.component';




export function onAuthRequired({ oktaAuth, router }) {
  router.navigate(['/login']);
}

const ROUTES: Routes = [
  {
    path: 'globalinformation', component: GlobalinfoComponent,
    data: {
      breadcrumb: 'Global Information',
    },
    children: [
      {
        path: 'trainingreports', component: TrainingreportsComponent,
        data: {
          breadcrumb: 'Global Training Reports',
        },
      },
      {
        path: 'modifycurriculum', component: ModifycurriculumComponent,
        data: {
          breadcrumb: 'Modify Global Training Curriculum',
        },
      },
      {
        path: 'adminsecurity', component: AdminsecurityComponent,
        data: {
          breadcrumb: 'Admin and Security',
        },
      },
      { path: '', redirectTo: 'trainingreports', pathMatch: 'full' },
    ]
  },

  {
    path: 'unitinformation', component: UnitinformationComponent,
    data: {
      breadcrumb: 'Unit Information',
    },
    children: [
      {
        path: 'trainingreports', component: UnittrainingreportComponent,
        data: {
          breadcrumb: 'Unit Training Reports',
        },
      },
      {
        path: 'trainingcurriculum', component: TrainingcurriculumComponent,
        data: {
          breadcrumb: 'Unit Training Curriculum',
        },
      },
      {
        path: 'projectfiles', component: ProjectfilesComponent,
        data: {
          breadcrumb: 'Project Files',
        },
      },
      { path: '', redirectTo: 'trainingcurriculum', pathMatch: 'full' },
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
    UnittrainingreportComponent,
    BreadcrumbComponent,
    HelpinfoComponent,
    TrainingComponent,
    FaqComponent,
    ContactComponent,


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
