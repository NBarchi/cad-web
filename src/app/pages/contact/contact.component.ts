import { Component } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ContactService } from '../../services/contact/contact.service';
import { Prospect } from '../../types/prospect';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  imports: [CommonModule ,FormsModule, ReactiveFormsModule, ToastModule],
  providers: [MessageService],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  form: FormGroup;

  prospect: Prospect[] = [];

  isSubmiting: boolean = false;

  constructor(private contactService: ContactService, private formBuilder: FormBuilder, private messageService: MessageService) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  newProspect(): void {
    if (this.form.invalid){
      this.form.markAllAsTouched();

      this.messageService.add({
        severity: 'warn', 
        summary: 'Invalid Data', 
        detail: 'Please check the information you have entered.'
      });

      return;
    } 

    this.isSubmiting = true;

    this.contactService.newProspect(this.form.value)
      .then((prospect) => {
        this.messageService.add({
          severity: 'success', 
          summary: '¡Sent!', 
          detail: 'We have received your information and will contact you soon.'
        });

        this.prospect.push(prospect);
        this.form.reset();

        this.isSubmiting = false;
      })
    .catch((error) => {
      console.error(error);

      this.messageService.add({
        severity: 'error', 
        summary: 'Error', 
        detail: 'There was an error submitting your information. Please try again later.'

      })

      this.isSubmiting = false;
    });

  }
}


