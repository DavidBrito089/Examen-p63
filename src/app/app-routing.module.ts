import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { PrivateComponent } from './components/private/private.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: RegisterComponent },
  { path: 'private', component: PrivateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
