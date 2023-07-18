import { Component, OnInit } from '@angular/core';
import { CategoriesReport } from 'src/app/entities/categoriesReport';
import { DateService } from 'src/app/services/reports/date/date.service';
import { ReportService } from 'src/app/services/reports/report.service';
import * as Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsData from 'highcharts/modules/data';
import HighchartsAccessibility from 'highcharts/modules/accessibility';

HighchartsExporting(Highcharts);
HighchartsData(Highcharts);
HighchartsAccessibility(Highcharts);
@Component({
  selector: 'app-categories-reports',
  templateUrl: './categories-reports.component.html',
  styleUrls: ['./categories-reports.component.scss'],
})
export class CategoriesReportsComponent implements OnInit {
  //the filter values
  month: number;
  year: number;
  error: string;

  categoriesReports: CategoriesReport[];
  displayedColumns: string[] = [
    'category',
    'total amount',
    'minimum value',
    'maximum value',
    'status',
  ];

  constructor(
    private dateService: DateService,
    private reportService: ReportService
  ) {}

  ngOnInit() {
    this.dateService.currentDate.subscribe((date) => {
      this.month = date.month;
      this.year = date.year;
      this.getCategoriesReport(this.month, this.year);
    });
  }

  getCategoriesReport(month: number, year: number): void {
    this.reportService.getCategories({ month: month, year: year }).subscribe(
      (reports) => {
        this.categoriesReports = reports;
        console.log(reports);
      },
      (error) => {
        this.error =
          'Error: ' + error.error.message +'';
        console.error(error);
      }
    );
  }
}
