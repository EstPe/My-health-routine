import { Component, OnInit } from '@angular/core';
import { ngxCsv } from 'ngx-csv';
import { CartService } from '../cart.service';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-statistics-diagrams',
  templateUrl: './statistics-diagrams.component.html',
  styleUrls: ['./statistics-diagrams.component.css'],
})
export class StatisticsDiagramsComponent implements OnInit {
  public data: Object[];
  public xAxis: Object;
  public yAxis: Object;
  chart: any;
  constructor() {}

  ngOnInit(): void {
    this.chart = document.getElementById('my_first_chart');
    Chart.register(...registerables);
    this.loadChart();
  }
  loadChart(): void {
    new Chart(this.chart, {
      type: 'bar',
      data: {
        datasets: [
          {
            data: [30, 60, 40, 50, 40, 55, 85, 65, 75, 58, 70],
            label: 'Product name',
            backgroundColor: '#007bff',
            // tension: 0.2,
            borderColor: '#007bff',
          },
        ],
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
      },
      options: {
        // responsive: true,
        // maintainAspectRatio: false,
        // scales: {
        //   y: {
        //     beginAtZero: true,
        //   },
        // },
        scales: {
          x: {
            grid: {
              offset: true,
            },
          },
        },
      },
    });
  }
}
