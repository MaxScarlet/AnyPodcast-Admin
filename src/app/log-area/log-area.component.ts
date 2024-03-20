import { Component, Input } from '@angular/core';
import { LogRec } from 'src/app/Models/log.interface';
import { LoggerService } from '../Services/logger.service';
import { Filter } from 'src/app/Models/filter.interface';

@Component({
  selector: 'app-log-area',
  templateUrl: './log-area.component.html',
  styleUrls: ['./log-area.component.css'],
})
export class LogAreaComponent {
  public logs: LogRec[] = [];
  constructor(private loggerService: LoggerService) {}

  fetchLogs(filters: Filter) {
    this.loggerService.get<LogRec>(filters).subscribe(
      (response: LogRec[]) => {
        this.logs = response;
      },
      (error) => {
        console.error('Error fetching logs', error);
      }
    );
  }
}
