import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, map } from 'rxjs';
import { BASE_URL } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  //crud fonction

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${BASE_URL}/products`);
  }

  getProductById(id:string):Observable<Product>{
    return this.http.get<Product>(`${BASE_URL}/products/${id}`);
  }

  createProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(`${BASE_URL}/products`,product);
  }

  updateProduct(id:string,product:Product):Observable<Product>{
    return this.http.put<Product>(`${BASE_URL}/products/${id}`,product);
  }

  deleteProduct(id:string):Observable<Product>{
    return this.http.delete<Product>(`${BASE_URL}/products/${id}`);
  }

  //other functions

  getProductByFilterName(name:string):Observable<Product[]>{
    return this.http.get<Product[]>(`${BASE_URL}/products?name_like=${name}`);
  }

}
