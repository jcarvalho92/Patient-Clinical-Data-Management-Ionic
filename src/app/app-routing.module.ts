import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'add-patient',
    loadChildren: () => import('./patient/add-patient/add-patient.module').then( m => m.AddPatientPageModule)
  },
  {
    path: 'search-patient',
    loadChildren: () => import('./patient/search-patient/search-patient.module').then( m => m.SearchPatientPageModule)
  },
  {
    path: 'patientInfo',
    loadChildren: () => import('./patient/view-patient/view-patient.module').then( m => m.ViewPatientPageModule)
  },
  {
    path: 'view-all-patients',
    loadChildren: () => import('./patient/view-all-patients/view-all-patients.module').then( m => m.ViewAllPatientsPageModule)
  },
  {
    path: 'add-record',
    loadChildren: () => import('./record/add-record/add-record.module').then( m => m.AddRecordPageModule)
  },
  {
    path: 'search-record',
    children: [
      {
        path: '',
        loadChildren: () => import('./record/search-record/search-record.module').then( m => m.SearchRecordPageModule)
      },
      {
        path: ':patientInfo',
        loadChildren: () => import('./record/view-record/view-record.module').then( m => m.ViewRecordPageModule)
      },
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
