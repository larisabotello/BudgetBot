import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-budget-view',
  templateUrl: './budget-view.component.html',
  styleUrls: ['./budget-view.component.scss'],
})
export class BudgetViewComponent implements OnInit {
  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;
  constructor(private dialogRef: MatDialogRef<BudgetViewComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  incomingTotal: number;
  outgoingTotal: number;
  budgetTotal = 0;
  incomingArray = this.data.incoming;
  outgoingArray = this.data.outgoing;
  monthNM = this.data.month;
  ngOnInit() {
    this.incomingTotal = this.findTotal(this.incomingArray);
    this.outgoingTotal = this.findTotal(this.outgoingArray);
    this.createPieChart(this.incomingTotal, this.outgoingTotal);
    this.budgetTotal = this.budgetCalculation(this.incomingTotal, this.outgoingTotal);
  }
  findTotal(array) {
    let val = 0;
    array.forEach(element => {
      val += element.amount;
    });
    return val;
  }
  close() {
    this.dialogRef.close(null);
  }
  budgetCalculation(inc, out) {
    let val = inc - out;
    return val;
  }
  createPieChart(inc, out) {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
          labels: ["Incoming", "Outgoing"],
          datasets: [{
              label: 'money',
              data: [inc, out],
              backgroundColor: [
                  'rgba(0, 255, 0, 0.7)',
                  'rgba(255, 0, 0, 0.7)'
              ],
              hoverBackgroundColor: [
                'rgba(0, 255, 0)',
                'rgba(255, 0, 0)'
              ]
          }]
      }
  });
  }
}
