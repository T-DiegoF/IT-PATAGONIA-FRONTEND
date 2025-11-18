import { CompanyRepository } from './company.repository';
import { Company } from './company.entity';

export class RegisterCompanyUseCase {
  constructor(private repository: CompanyRepository) {}

  execute(company: Company): void {
    this.repository.save(company);
  }
}