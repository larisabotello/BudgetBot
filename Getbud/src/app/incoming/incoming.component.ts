import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddIncomingComponent } from '../add-incoming/add-incoming.component';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-incoming',
  templateUrl: './incoming.component.html',
  styleUrls: ['./incoming.component.scss'],
})
export class IncomingComponent implements OnInit {
  inKey = 'incomingData';
  constructor(public dialog: MatDialog, private storage: Storage) { }
  allIncomingData: {title: string, date: Date, amount: number}[] = [];
  ngOnInit() {
    this.getStorageData();
  }
  addIncoming() {
    const incomingDialog = this.dialog.open(AddIncomingComponent, {
      disableClose: true,
      hasBackdrop: true,
    });
    incomingDialog.afterClosed().subscribe(data => {
      if(data !== null){
        if(this.allIncomingData === null) {
          this.allIncomingData = [data];
        } else {
          this.allIncomingData.push(data)
        }
        this.storage.set(this.inKey, this.allIncomingData);
      }
    });
  }
  delete(index) {
    this.allIncomingData.splice(index, 1);
  }
  getStorageData() {
    try{
      this.storage.get(this.inKey).then((data) =>{
        this.allIncomingData = data
      });
    } catch {

    }
  }
}
