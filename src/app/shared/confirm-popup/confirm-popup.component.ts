import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss']
})
export class ConfirmPopupComponent {
  success: boolean= false;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any){
    this.success = this.data.success
  }
}