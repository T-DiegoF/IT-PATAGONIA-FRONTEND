export type CompanyType = 'Pyme' | 'Corporate';

export interface Company {
  name: string;
  type: CompanyType;
  joinedAt: Date;
}