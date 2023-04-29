import { Component } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent {

  data:Product[] = [
    {
      "id": 1,
      "name":"ASUS ROG Strix G16 (2023)",
      "price":19690,
      "rating":4.7,
      "img": {
        "base_img": "https://m.media-amazon.com/images/I/71ESIC0NIvL._AC_SX466_.jpg",
        "img":"https://m.media-amazon.com/images/I/71yD0MYSizL._AC_SX466_.jpg"
      },
      "desc":"ASUS ROG Strix G16 (2023) Gaming Laptop, 16” 16:10 FHD 165Hz, GeForce RTX 4070, Intel Core i9-13980HX, 16GB DDR5, 1TB PCIe SSD, Wi-Fi 6E, Windows 11, G614JI-AS94, Eclipse Gray",
      "about":[
        "POWER UP YOUR PLAY - Draw more frames and win more games with Windows 11, a 13th Gen Intel Core i9-13980HX processor, and an NVIDIA GeForce RTX 4070 Laptop GPU at 140W Max TGP.",
        "BLAZING FAST MEMORY AND STORAGE – Multitask swiftly with 16GB of DDR5-4800MHz memory and speed up loading times with 1TB of PCIe 4x4.",
        "ROG INTELLIGENT COOLING – To put this amount of power in a gaming laptop, you need an even better cooling solution. The Strix features Thermal Grizzly’s Conductonaut Extreme liquid metal on the CPU, and a third intake fan among other premium features, to allow for better sustained performance over long gaming sessions.",
        "SWIFT VISUALS – The Strix G16 has a fast FHD 165Hz panel to make sure you never miss a moment. It also covers 100% of the sRGB color space and feature Dolby Vision, Adaptive-Sync support, and an 90% screen-to-body ratio for a stellar gaming and viewing experience.",
        "MUX SWITCH WITH ADVANCED OPTIMUS - A MUX Switch increases laptop gaming performance by 5-10% by routing frames directly from the dGPU to the display bypassing the iGPU. With Advanced Optimus the switch between iGPU and dGPU becomes automatic based on the task, optimizing battery life."
      ],
      "detail":[
        {"description":"Color","value":["#1d5e00"]},
        {"description":"Brand","value":"ASUS"},
        {"description":"Series","value":"ROG Strix G16"},
        {"description":"Screen Size","value":"16 Inches"},
        {"description":"Hard Disk Size","value":"1 TB"},
        {"description":"CPU Model","value":"Intel Core i9"},
        {"description":"Ram Memory Installed Size","value":"16 GB"},
        {"description":"Graphics Coprocessor","value":"NVIDIA GeForce RTX 4070"}
      ]
    }
  ];

}
