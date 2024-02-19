import { Component } from '@angular/core';
import { Prueba1Service } from '../../services/prueba1.service';
import { prueba3 } from '../../prueba';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard-pastel',
  templateUrl: './dashboard-pastel.component.html',
  styleUrl: './dashboard-pastel.component.css'
})
export class DashboardPastelComponent {

  prueba2: prueba3[] = [];
  
  constructor(private prueba1service: Prueba1Service) { }

  ngOnInit() {
    this.prueba1service.obtenerDatos().subscribe(data => {
      this.prueba2 = data;
      const ctx = document.getElementById('my-pie-chart') as HTMLCanvasElement;
      const labels = this.prueba2.map(item => item.about);
      const monetaryAmounts = this.prueba2.map(item => {
        if (item.FundingAmount && item.FundingAmount.length > 0) {
          return parseFloat(item.FundingAmount[0].monetaryAmount);
        } else {
          return 0; // O cualquier otro valor que desees usar para indicar que no hay un valor monetario disponible
        }
      });
      const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            label: 'Monetary Amount',
            data: monetaryAmounts,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
              // Puedes añadir más colores si tienes más datos
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
              // Puedes añadir más colores si tienes más datos
            ],
            borderWidth: 1
          }]
        }
      });
    });
  }
}
