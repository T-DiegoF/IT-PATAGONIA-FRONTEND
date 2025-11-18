import { Company } from './company.entity';

export interface CompanyRepository {
  save(company: Company): void;
  findAll(): Company[];
}