import { Component, OnInit } from '@angular/core';
import { ChartData } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private productService:ProductService){}
  ngOnInit(): void {
    this.productService.getChartData().subscribe({
      next:(data:any)=>{ this.data = data;},
      error:(error:any)=>{ },
      complete: ()=>{}
    })
  }

  data!:ChartData[];

}
