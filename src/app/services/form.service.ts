import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmPopupComponent } from '../shared/confirm-popup/confirm-popup.component';
import { formItem, placeholder } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  createContactForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required], 
      email: ['', [Validators.required, Validators.email]], 
      message: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(10)]]
    });
  }

  showSuccessDialog(): void {
    this.dialog.open(ConfirmPopupComponent, {
      data: {
        success: true
      }
    });
  }

  resetForm(form: FormGroup): void {
    form.reset();
  }

  isFormValid(form: FormGroup): boolean {
    return form.valid;
  }

  onSubmit(form: FormGroup): void {
    if (this.isFormValid(form)) {
      this.showSuccessDialog();
      this.resetForm(form);
    }
  }

  getContactFormInputList(): formItem[] {
    return [
      { title: 'CONTACTPAGE.NAME', controlName: 'name', placeholderName: 'CONTACTPAGE.NAME_PLACEHOLDER' },
      { title: 'CONTACTPAGE.EMAILL', controlName: 'email', placeholderName: 'CONTACTPAGE.EMAIL_PLACEHOLDER' },
      { title: 'CONTACTPAGE.MESSAGE', controlName: 'message', placeholderName: 'CONTACTPAGE.MESSAGE_PLACEHOLDER' }
    ];
  }

  getContactFormPlaceholders(): placeholder{
    return {
        name: 'CONTACTPAGE.NAME_PLACEHOLDER',
        email: 'CONTACTPAGE.EMAIL_PLACEHOLDER',
        message: 'CONTACTPAGE.MESSAGE_PLACEHOLDER'
      }
  }
}
