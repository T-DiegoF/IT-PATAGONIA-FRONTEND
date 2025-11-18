import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './company-form.component.html'
})
export class CompanyFormComponent {
  company: any = {
    name: '',
    type: '',
    date: '' 
  };

  constructor(private companyService: CompanyService) {}

  private toDDMMYYYY(value: string): string {
    if (!value) return '';
    if (typeof value === 'string' && value.includes('-')) {
      const [y, m, d] = value.split('-');
      return `${d.padStart(2, '0')}/${m.padStart(2, '0')}/${y}`;
    }
    return value; 
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    const joinedAt = this.toDDMMYYYY(this.company.date);

    const payload = {
      name: (this.company.name || '').trim(),
      type: this.company.type,
      joinedAt
    };

    console.log('Payload a enviar:', payload);

    this.companyService.createCompany(payload).subscribe({
      next: (response) => {
        console.log('Empresa creada con éxito:', response);
        form.resetForm();
        this.company = { name: '', type: '', date: '' };
      },
      error: (error) => {
        console.error('Error al crear la empresa:', error);
      }
    });
  }
}