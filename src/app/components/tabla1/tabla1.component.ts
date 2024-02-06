import { Component } from '@angular/core';
import { Prueba1Service } from '../../prueba1.service';
import { prueba3 } from '../../prueba';

@Component({
  selector: 'app-tabla1',
  templateUrl: './tabla1.component.html',
  styleUrl: './tabla1.component.css'
})
export class Tabla1Component {
  prueba2:prueba3[]=[];
  elementoEncontrado: prueba3[] = [];
constructor(private prueba1service:Prueba1Service){this.prueba1service.obtenerDatos().subscribe(data =>
  {
  console.log(data);
  this.prueba2=data;
  this.prueba2.find(item => item.fundedBy === 'PRESUPUESTOS GENERALES DE LAS COMUNIDADES AUTÓNOMAS (PCA)');
  });
  
 }
}
