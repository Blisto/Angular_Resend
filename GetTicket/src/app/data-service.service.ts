import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { ConnectService } from './auth/alvis.service';

export interface DateTime{
  date:string;
  time:string;
};


@Injectable({
  providedIn: 'root'
})

export class DataServiceService {

  constructor() { }
  getSysTime():DateTime{
    let systime=new Date();
    const language='en';
    const timezone='+0800';
    const DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm';
    const DATE_FORMAT = 'YYYY-MM-dd';
    const TIME_FORMAT = 'HH:mm:ss';
    const d=formatDate(systime,DATE_FORMAT,language,timezone);
    const t=formatDate(systime,TIME_FORMAT,language,timezone);

    return {
      date:d,
      time:t,
    };
  }

  SQLDate(value:Date|string):DateTime{
    let systime=new Date(value);
    const language='en';
    const timezone='+0800';
    const DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm';
    const DATE_FORMAT = 'YYYY-MM-dd';
    const TIME_FORMAT = 'HH:mm:ss';
    const DplusT_FORMAT = 'YYYY-MM-dd HH:mm:ss';
    const d=formatDate(systime,DATE_FORMAT,language,timezone);
    const t=formatDate(systime,TIME_FORMAT,language,timezone);
    const dt=formatDate(systime,DplusT_FORMAT,language,timezone);
    console.log(`[CDataService-${this.getSysTime().date}-${this.getSysTime().time}]: `, dt);

    return{
      date:d,
      time:t
    };
  }
}
