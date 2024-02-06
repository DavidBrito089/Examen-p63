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
import { Prueba1Service } from './prueba1.service';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    MenuComponent,
    PrivateComponent,
    FooterComponent,
    TermsComponent,
    Tabla1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Prueba1Service, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
