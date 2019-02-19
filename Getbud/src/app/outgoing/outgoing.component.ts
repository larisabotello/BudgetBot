import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddOutgoingComponent } from '../add-outgoing/add-outgoing.component';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-outgoing',
  templateUrl: './outgoing.component.html',
  styleUrls: ['./outgoing.component.scss'],
})
export class OutgoingComponent implements OnInit {
  outKey = 'outgoingData';
  constructor(public dialog: MatDialog, private storage: Storage) { }
  allOutgoingData: {title: string, date: Date, amount: number}[] = [];
  ngOnInit() {
    this.getStorageData();
  }

  addOutgoing() {
    const outgoingDialog = this.dialog.open(AddOutgoingComponent, {
      disableClose: true,
      hasBackdrop: true,
    });
    outgoingDialog.afterClosed().subscribe(data =>{
      if(data !== null){
        if(this.allOutgoingData === null) {
          this.allOutgoingData = [data];
        } else {
          this.allOutgoingData.push(data)
        }
        this.storage.set(this.outKey, this.allOutgoingData);
      }
    });
  }
  delete(index) {
    this.allOutgoingData.splice(index, 1);
    this.storage.set(this.outKey, this.allOutgoingData);
  }
  getStorageData() {
    try{
      this.storage.get(this.outKey).then((data) =>{
        this.allOutgoingData = data
      });
    } catch {

    }
  }

}
