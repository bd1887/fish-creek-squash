import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../_animations/index';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css'],
  animations: [
    [fadeInAnimation]
  ]
})
export class LessonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
