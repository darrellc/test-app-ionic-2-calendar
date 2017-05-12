import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  calendar: {};

  constructor(public navCtrl: NavController) {
    this.calendar = {};
    this.createCalendar();
  }

  createCalendar(){
    this.calendar = {
      mode: 'month',
      currentDate: new Date(),
      events: [{
        title: "Sangeeta's B-day!",
        startTime: new Date(Date.UTC(2017, 4, 13)),
        endTime: new Date(Date.UTC(2017, 4, 14)),
        allDay: true
      },{
        title: "Memorial Day",
        startTime: new Date(Date.UTC(2017, 4, 29)),
        endTime: new Date(Date.UTC(2017, 4, 30)),
        allDay: true
      }]
    };
  };

}
