import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { PrivateComponent } from './components/private/private.component';
import { Tabla1Component } from './components/tabla1/tabla1.component';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CambiarContraseniaUserComponent } from './components/cambiar-contrasenia-user/cambiar-contrasenia-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: RegisterComponent },
  { path: 'private', component: PrivateComponent},
  { path: 'tabla1', component: Tabla1Component},
  { path: 'admin', component: AdminComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'cambiar', component: CambiarContraseniaUserComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
