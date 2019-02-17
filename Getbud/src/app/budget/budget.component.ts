import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit {

  constructor(private storage: Storage) { }
  inKey = 'incomingData';
  outKey = 'outgoingData';
  allIncoming: any[];
  allOutgoing: any[];
  incomingSelected: any[];
  outgoingSelected: any[];
  months = ['January', 'February', 'March', 'April','May','June','July','August','September','October','November','December'];
  ngOnInit() {
    this.getStorageData(this.inKey);
    this.getStorageData(this.outKey);
  }
  getStorageData(key){
    try{
      this.storage.get(key).then((data) =>{
        if(key === this.inKey) {
          this.allIncoming = data;
        } else if (key === this.outKey) {
          this.allOutgoing = data;
        }
      });
    } catch {

    }
  }
  monthSelect(i) {
    this.allIncoming.forEach(ele =>{
      let date = new Date(ele.date);
      let month = date.getMonth();
      let year = date.getFullYear();
      if(year === 2019 && month === i) {
        this.incomingSelected.push(ele);
      }
    });
    this.allOutgoing.forEach(ele =>{
      let date = new Date(ele.date);
      let month = date.getMonth();
      let year = date.getFullYear();
      if(year === 2019 && month === i) {
        this.outgoingSelected.push(ele);
      }
    });
  }
}
