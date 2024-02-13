import { Component } from '@angular/core';
import { Prueba1Service } from '../../prueba1.service';
import { prueba3 } from '../../prueba';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  prueba2:prueba3[]=[];
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  constructor(private prueba1service:Prueba1Service){this.prueba1service.obtenerDatos().subscribe(data =>
    {
    console.log(data);
    this.prueba2=data;
    this.prueba2.find(item => item.fundedBy === 'PRESUPUESTOS GENERALES DE LAS COMUNIDADES AUTÓNOMAS (PCA)');
    });
    
}}
