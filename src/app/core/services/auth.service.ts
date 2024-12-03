import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { AppRoutes } from 'src/app/shared/models/routes/appRoutes';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly env: string = environment.baseURL;
  jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post<any>(this.env + AppRoutes.login, data);
  }

  get currentToken(): string {
    return localStorage.getItem('token')!;
  }

  get isTokenAvailabe(): boolean {
    return !!localStorage.getItem('token');
  }

  get decodeToken() {
    return this.jwtHelper.decodeToken(localStorage.getItem('token')!)!;
  }

  getUser() {
    return this.decodeToken;
  }
}
