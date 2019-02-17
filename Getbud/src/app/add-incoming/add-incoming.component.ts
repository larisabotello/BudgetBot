import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-incoming',
  templateUrl: './add-incoming.component.html',
  styleUrls: ['./add-incoming.component.scss'],
})
export class AddIncomingComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddIncomingComponent>) { }
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
    this.dialogRef.close(null);
  }

}
