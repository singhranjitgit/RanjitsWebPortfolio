import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '../../services/form.service'; // Import the service
import { formItem } from 'src/app/interfaces';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  formList: Array<formItem> = this.formService.getContactFormInputList();

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.contactForm = this.formService.createContactForm();
  }

  onSubmit(): void {
    this.formService.onSubmit(this.contactForm);
  }
}
