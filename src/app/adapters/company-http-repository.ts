import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyRepository } from '../core/company.repository';
import { Company } from '../core/company.entity';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CompanyHttpRepository implements CompanyRepository {
  private readonly apiUrl = `${environment.apiUrl}/companies`;

  constructor(private http: HttpClient) {}

  save(company: Company): Observable<Company> {
    return this.http.post<Company>(this.apiUrl, company);
  }
  findAll(): Company[] {
    
  return []
  }
}