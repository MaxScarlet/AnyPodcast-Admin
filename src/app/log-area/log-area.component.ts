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
  public timeStamp(timeString: string): string {
    const time = new Date(timeString);
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const milliseconds = time.getMilliseconds();

    // Format the time to display leading zeros if necessary
    const formattedTime = `${hours < 10 ? '0' + hours : hours}:${
      minutes < 10 ? '0' + minutes : minutes
    }:${seconds < 10 ? '0' + seconds : seconds}.${
      milliseconds < 10
        ? '00' + milliseconds
        : milliseconds < 100
        ? '0' + milliseconds
        : milliseconds
    }`;

    return formattedTime;
  }
}
