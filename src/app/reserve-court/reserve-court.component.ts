import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../_animations/index';

@Component({
  selector: 'app-reserve-court',
  templateUrl: './reserve-court.component.html',
  styleUrls: ['./reserve-court.component.css'],
  animations: [
    [fadeInAnimation]
  ]
})
export class ReserveCourtComponent implements OnInit {

  date: Date;
  constructor() {
    this.date = new Date();
  }

  ngOnInit() {
  }

}
