import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { prueba3 } from '../prueba';
const configUrl='assets/datos.json';
@Injectable({
  providedIn: 'root'
})
export class Prueba1Service {

  private URL = 'http://localhost:3000/api';
  constructor(private httpclient: HttpClient) {
    console.log('El servicio Http esta funcionando…')
    }

  obtenerDatos(){
    return this.httpclient.get<any[]>(`${this.URL}/subvenciones`);
   }

}
