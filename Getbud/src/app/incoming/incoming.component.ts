import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddIncomingComponent } from '../add-incoming/add-incoming.component';
@Component({
  selector: 'app-incoming',
  templateUrl: './incoming.component.html',
  styleUrls: ['./incoming.component.scss'],
})
export class IncomingComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {}
  addIncoming() {
    this.dialog.open(AddIncomingComponent, {
      disableClose: true,
      hasBackdrop: true,
    });
    console.log('add incoming data');
  }
}
