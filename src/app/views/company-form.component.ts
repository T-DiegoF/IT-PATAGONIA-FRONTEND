import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompanyService } from '../services/company.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-company-form',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './company-form.component.html'
})
export class CompanyFormComponent {
  company: any = {};

  constructor(private companyService: CompanyService) {}

  onSubmit(form: any): void {
   
    if (form.valid) {

      const payload = {
        name: this.company.name,
        type: this.company.type,
        joinedAt: this.company.date
      };

      console.log('Payload a enviar:', payload);

      this.companyService.createCompany(payload).subscribe({
        next: (response) => {
          console.log('Empresa creada con éxito:', response);
          form.reset();
        },
        error: (error) => {
          console.error('Error al crear la empresa:', error);
        }
      });
    } else {
      console.log('El formulario es inválido');
    }
  }
}