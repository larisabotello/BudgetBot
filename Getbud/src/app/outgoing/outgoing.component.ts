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
  allOutgoingData: {title: string, date: Date, amount: number}[] = [];
  ngOnInit() {}

  addOutgoing() {
    const outgoingDialog = this.dialog.open(AddOutgoingComponent, {
      disableClose: true,
      hasBackdrop: true,
    });
    outgoingDialog.afterClosed().subscribe(data =>{
      if(data !== null){
        this.allOutgoingData.push(data)
      }
    });
  }
  delete(index) {
    this.allOutgoingData.splice(index, 1);
  }

}
