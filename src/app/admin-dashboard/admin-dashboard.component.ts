import { Component, ViewChild } from '@angular/core';
import { Filter } from 'src/app/Models/filter.interface';
import { LogAreaComponent } from '../log-area/log-area.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {
  filter!: Filter;
  @ViewChild(LogAreaComponent) logAreaComponent!: LogAreaComponent;

  constructor() {}

  applyFilters(filters: any) {
    this.logAreaComponent.fetchLogs(filters);
  }
}
