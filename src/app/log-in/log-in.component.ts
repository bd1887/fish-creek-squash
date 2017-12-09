import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../_animations/index';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  animations: [
    [fadeInAnimation]
  ]
})
export class LogInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
