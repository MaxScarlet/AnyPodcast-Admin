export interface LogRec {
  Created: string;
  UserID: string;
  Msg: string;
  Data: string;
  LogType: LogLevel;
}

export enum LogLevel {
  ERROR, //Includes error
  WARN, //Includes warn , error
  INFO, //Includes info, warn , error
  DEBUG, //Includes debug, info, warn , error
}
