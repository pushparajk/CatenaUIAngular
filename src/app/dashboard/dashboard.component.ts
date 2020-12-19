import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet,SingleDataSet,monkeyPatchChartJsLegend,monkeyPatchChartJsTooltip  } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();

  }

  ngOnInit(): void {
  }

   lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Fund Inflow' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false

  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

/* For bar chart */
  barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  barChartLabels: Label[] = ['Maharashtra', 'Tamilnadu', 'Kerala', 'Karnataka', 'Rajasthan'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Charity Trust Fund Details' }
  ];

/* For doughnut chart */
  doughnutChartOptions: ChartOptions  = {
    responsive: true,
    maintainAspectRatio: false
  };

  doughnutChartLabels: Label[] = ['Tamilnadu', 'Karnataka', 'Odissa'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';

  /* Pie chart */
  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  public pieChartLabels: Label[] = [['Nagaland'], ['Bihar'], 'Gujarat'];
  public pieChartData: SingleDataSet = [30, 50, 20];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];


}

