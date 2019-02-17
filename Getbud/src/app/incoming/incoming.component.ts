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
  allIncomingData: {title: string, date: Date, amount: number}[] = [];
  ngOnInit() {}
  addIncoming() {
    const incomingDialog = this.dialog.open(AddIncomingComponent, {
      disableClose: true,
      hasBackdrop: true,
    });
    incomingDialog.afterClosed().subscribe(data => {
      if(data !== null){
        this.allIncomingData.push(data)
      }
    });
  }
  delete(index) {
    this.allIncomingData.splice(index, 1);
  }
}
