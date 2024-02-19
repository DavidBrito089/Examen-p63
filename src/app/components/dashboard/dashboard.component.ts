import { Component } from '@angular/core';
import { Prueba1Service } from '../../services/prueba1.service';
import { prueba3 } from '../../prueba';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  displayedColumns: string[] = ['about', 'identifier', 'title', 'BDNSregistrationDate', 'basesURL', 'fundedBy', 'monetaryAmount', 'currency', 'BDNSannouncementPermalink', 'BDNSconcessionsPermalink'];
 
  prueba2:prueba3[]=[];
  
  constructor(private prueba1service: Prueba1Service) {  }

  ngOnInit() {
    const ctx = document.getElementById('my-chart') as HTMLCanvasElement;
  
    this.prueba1service.obtenerDatos().subscribe(data => {
      this.prueba2 = data;
  
      const monetaryAmounts = this.prueba2.map(item => {
        if (item.FundingAmount && item.FundingAmount.length > 0) {
          return parseFloat(item.FundingAmount[0].monetaryAmount);
        } else {
          return null; // O cualquier otro valor que desees usar para indicar que no hay un valor monetario disponible
        }
      });
  
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.prueba2.map(item => item.BDNSregistrationDate),
          datasets: [{
            label: 'Monetary Amount',
            data: monetaryAmounts,
          }],
        },
      });
    });
  }

  
  
}
