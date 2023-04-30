import { AfterViewChecked, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewChecked{

  canvas: any;
  ctx: any;
  tmp:any;
  @ViewChild('myChart') mychart:any;

  @Input() type:any = 'line';
  @Input() data:any = [65, 59, 80, 81, 56, 55, 40,35, 39, 40, 41, 56, 55, 70, 78,65, 39, 20, 41, 56, 85, 90];
  @Input() label:any = ['January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July', 'February', 'March', 'April', 'May', 'June', 'July'];

  ngAfterViewChecked() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    let gradient = this.ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#05aa37f6');
    gradient.addColorStop(1, '#06852c18');
    this.tmp = new Chart(this.ctx, {
      type: this.type,
      data: {
        datasets: [{
          label: 'My First Dataset',
          data: this.data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
            'rgba(255, 0, 0, 0.2)',
            'rgba(255, 255, 0, 0.2)',
            'rgba(0, 255, 0, 0.2)',
            'rgba(0, 0, 255, 0.2)',
            'rgba(128, 0, 128, 0.2)',
            'rgba(255, 20, 147, 0.2)',
            'rgba(46, 139, 87, 0.2)',
            'rgba(178, 34, 34, 0.2)',
            'rgba(128, 128, 0, 0.2)',
            'rgba(0, 128, 128, 0.2)',
            'rgba(0, 255, 255, 0.2)',
            'rgba(218, 165, 32, 0.2)',
            'rgba(70, 130, 180, 0.2)',
            'rgba(255, 165, 0, 0.2)',
            'rgba(255, 99, 71, 0.2)',
            'rgba(255, 192, 203, 0.2)',
            'rgba(128, 0, 0, 0.2)',
            'rgba(210, 105, 30, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
            'rgb(255, 0, 0)',
            'rgb(255, 255, 0)',
            'rgb(0, 255, 0)',
            'rgb(0, 0, 255)',
            'rgb(128, 0, 128)',
            'rgb(255, 20, 147)',
            'rgb(46, 139, 87)',
            'rgb(178, 34, 34)',
            'rgb(128, 128, 0)',
            'rgb(0, 128, 128)',
            'rgb(0, 255, 255)',
            'rgb(218, 165, 32)',
            'rgb(70, 130, 180)',
            'rgb(255, 165, 0)',
            'rgb(255, 99, 71)',
            'rgb(255, 192, 203)',
            'rgb(128, 0, 0)',
            'rgb(210, 105, 30)'
          ],
          fill: false,
          tension: 0.1
        }] ,
          labels: this.label,
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend:{
            display:false
          }
        }
      }
  });
  }
}
