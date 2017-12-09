import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../_animations/index';

@Component({
  selector: 'app-club-information',
  templateUrl: './club-information.component.html',
  styleUrls: ['./club-information.component.css'],
  animations: [
    [fadeInAnimation]
  ]
})
export class ClubInformationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0)
  }

}
