import { Component, OnInit } from '@angular/core';
import { Prueba1Service } from '../../services/prueba1.service';
import { prueba3 } from '../../prueba';

@Component({
  selector: 'app-dashboard-pastelngx',
  templateUrl: './dashboard-pastelngx.component.html',
  styleUrl: './dashboard-pastelngx.component.css'
})
export class DashboardPastelngxComponent implements OnInit {
  prueba2: prueba3[] = [];
  data: any[] = [];

  constructor(private prueba1service: Prueba1Service) { }

  ngOnInit() {
    this.prueba1service.obtenerDatos().subscribe(data => {
      this.prueba2 = data;
      this.data = this.prueba2.map(item => ({
        name: item.identifier,
        value: item.FundingAmount && item.FundingAmount.length > 0 ? parseFloat(item.FundingAmount[0].monetaryAmount) : 0
      }));
    });
  }
}
