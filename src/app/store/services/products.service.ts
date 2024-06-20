import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  postProduct(data: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, data);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  editProduct(data: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${data.id}`, data);
  }

  deleteProduct(id: string): Observable<Object> {
    return this.http.delete<Object>(`${this.apiUrl}/${id}`);
  }
}
