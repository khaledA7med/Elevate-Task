import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<any> {
    return this.http.get<any>('https://fakestoreapi.com/products/categories');
  }

  getAllProducts(): Observable<any> {
    return this.http.get<any>('https://fakestoreapi.com/products');
  }

  getProductsByCategory(category: string): Observable<any> {
    return this.http.get<any>(
      `https://fakestoreapi.com/products/category/${category}`
    );
  }

  getProductDetails(id: number): Observable<any> {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
}
