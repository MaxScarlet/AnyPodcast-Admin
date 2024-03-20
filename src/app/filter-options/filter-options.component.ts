import { Component, EventEmitter, Output } from '@angular/core';
import { Filter } from 'src/app/Models/filter.interface';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.css'],
})
export class FilterOptionsComponent {
  @Output() filtersApplied = new EventEmitter<any>();

  startDate: string = '';
  endDate: string = '';
  selectedLogType: string = '';
  searchText: string = '';

  constructor() {}

  applyFilters() {
    const filters: Filter = {
      startDate: this.startDate,
      endDate: this.endDate,
      searchText: this.searchText,
    };
    console.log('filter-options', filters);
    this.filtersApplied.emit(filters);
  }

  resetFilters() {
    this.startDate = '';
    this.endDate = '';
    this.searchText = '';
    this.applyFilters();
  }
}
