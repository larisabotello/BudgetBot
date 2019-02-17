import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-outgoing',
  templateUrl: './add-outgoing.component.html',
  styleUrls: ['./add-outgoing.component.scss'],
})
export class AddOutgoingComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddOutgoingComponent>) { }
  dateInput: Date;
  titleInput: string = null;
  amountInput: number = null;
  ngOnInit() {}

  saveInput() {
    if(this.titleInput !== '' && this.dateInput !== null && this.amountInput!== null) {
      this.dialogRef.close({title: this.titleInput, date: this.dateInput, amount: this.amountInput});
    } else {
    }
  }
  
  close() {
    this.dialogRef.close();
  }

}

