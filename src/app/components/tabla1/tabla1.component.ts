import { Component, OnInit  } from '@angular/core';
import { Prueba1Service } from '../../services/prueba1.service';
import { AuthService } from '../../services/auth.service';
import { prueba3 } from '../../prueba';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-tabla1',
  templateUrl: './tabla1.component.html',
  styleUrl: './tabla1.component.css'
})
export class Tabla1Component  implements OnInit{

  data: any;
  prueba2: prueba3[] = [];


  constructor(private prueba1service: Prueba1Service, private authService: AuthService) {

    this.prueba1service.obtenerDatos().subscribe(data => {
      console.log(data);
      this.prueba2 = data;
      this.prueba2.find(item => item.fundedBy === 'PRESUPUESTOS GENERALES DE LAS COMUNIDADES AUTÓNOMAS (PCA)');
    });

  }

  ngOnInit(): void {

  }

  
 descargarTabla(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.prueba2);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Tabla');
    const buffer: ArrayBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([buffer], { type: 'application/octet-stream' });
    const url = window.URL.createObjectURL(data);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    a.href = url;
    a.download = 'tabla.xlsx';
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

}
