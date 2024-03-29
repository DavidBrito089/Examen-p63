import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { PrivateComponent } from './components/private/private.component';
import { FooterComponent } from './components/footer/footer.component';
import { TermsComponent } from './components/terms/terms.component';
import { Tabla1Component } from './components/tabla1/tabla1.component';
import {  HttpClientModule } from '@angular/common/http';
import { Prueba1Service } from './services/prueba1.service';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { AdminService } from './services/admin.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCardModule } from '@angular/material/card';
import { DashboardPastelComponent } from './components/dashboard-pastel/dashboard-pastel.component';
import { DashboardPastelngxComponent } from './components/dashboard-pastelngx/dashboard-pastelngx.component';
import { CambiarContraseniaUserComponent } from './components/cambiar-contrasenia-user/cambiar-contrasenia-user.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    MenuComponent,
    PrivateComponent,
    FooterComponent,
    TermsComponent,
    Tabla1Component,
    AdminComponent,
    DashboardComponent,
    DashboardPastelComponent,
    DashboardPastelngxComponent,
    CambiarContraseniaUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
    MatCardModule,
    FormsModule 
  ],
  providers: [Prueba1Service, AuthService, AdminService, provideAnimationsAsync() ],
  bootstrap: [AppComponent]
})
export class AppModule { }
