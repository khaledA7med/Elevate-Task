import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AppRoutes } from '../models/routes/appRoutes';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly env: string = environment.baseURL;

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<any> {
    return this.http.get<any>(this.env + AppRoutes.categories);
  }

  getAllProducts(): Observable<any> {
    return this.http.get<any>(this.env + AppRoutes.products);
  }

  getProductsByCategory(category: string): Observable<any> {
    return this.http.get<any>(
      this.env + AppRoutes.productsByCategory + `${category}`
    );
  }

  getProductDetails(id: number): Observable<any> {
    return this.http.get(this.env + AppRoutes.getProductDetails + `${id}`);
  }
}
