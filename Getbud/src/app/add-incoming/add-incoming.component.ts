import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-incoming',
  templateUrl: './add-incoming.component.html',
  styleUrls: ['./add-incoming.component.scss'],
})
export class AddIncomingComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddIncomingComponent>) { }

  ngOnInit() {}
  close() {
    this.dialogRef.close();
  }

}
