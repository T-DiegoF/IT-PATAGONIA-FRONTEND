import { Observable } from 'rxjs';
import { Company } from '../core/company.entity';


export abstract class CompanyRepository {
  abstract save(company: Company): Observable<Company>;
}