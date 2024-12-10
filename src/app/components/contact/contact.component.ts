import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '../../services/form.service'; // Import the service
import { formItem, placeholder } from 'src/app/interfaces';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  formList: Array<formItem> = this.formService.getContactFormInputList();

  placeholders: placeholder = this.formService.getContactFormPlaceholders();

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.contactForm = this.formService.createContactForm();
  }

  onSubmit(): void {
    this.formService.onSubmit(this.contactForm);
  }
}
