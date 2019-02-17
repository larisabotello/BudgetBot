import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-outgoing',
  templateUrl: './add-outgoing.component.html',
  styleUrls: ['./add-outgoing.component.scss'],
})
export class AddOutgoingComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddOutgoingComponent>) { }

  ngOnInit() {}
  close() {
    this.dialogRef.close();
  }

}

