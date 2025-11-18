import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CompanyService {
  private apiUrl = 'https://it-patagonia-challenge-backend-production.up.railway.app/companies';

  constructor(private http: HttpClient) {}

  createCompany(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}