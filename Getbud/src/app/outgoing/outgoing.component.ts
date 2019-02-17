import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddOutgoingComponent } from '../add-outgoing/add-outgoing.component';

@Component({
  selector: 'app-outgoing',
  templateUrl: './outgoing.component.html',
  styleUrls: ['./outgoing.component.scss'],
})
export class OutgoingComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {}

  addOutgoing() {
    this.dialog.open(AddOutgoingComponent, {
      disableClose: true,
      hasBackdrop: true,
    });
    console.log('Outgoing data');
  }

}
