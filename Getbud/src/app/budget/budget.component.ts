import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MatDialog } from '@angular/material';
import { BudgetViewComponent } from '../budget-view/budget-view.component';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit {
  @ViewChild('barCanvas') barCanvas;
  barChart: any;
  constructor(private storage: Storage,public dialog: MatDialog) { }
  inKey = 'incomingData';
  outKey = 'outgoingData';
  allIncoming: any[];
  allOutgoing: any[];
  incomingSelected: {title: string, date: Date, amount: number}[] = [];
  outgoingSelected: {title: string, date: Date, amount: number}[] = [];
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
    } catch {}
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
    this.openModal(i);
  }
  openModal(m) {
    const budgetDialog = this.dialog.open(BudgetViewComponent, {
      disableClose: true,
      hasBackdrop: true,
      data: {incoming: this.incomingSelected, outgoing: this.outgoingSelected, month: this.months[m]}
    });
    budgetDialog.afterClosed().subscribe(data=>{
      this.incomingSelected = [];
      this.outgoingSelected = [];
    });
  }
  createBarGraph() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }

  });

  }
}
