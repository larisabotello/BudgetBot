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
  titleInput: string;
  amountInput: number;
  ngOnInit() {}
  saveInput() {
    console.log(this.titleInput);
    console.log(this.dateInput);
    console.log(this.amountInput);
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }

}
