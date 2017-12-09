import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,NavigationEnd } from '@angular/router';
import { fadeInAnimation } from '../_animations/index';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css'],
  animations: [
    [fadeInAnimation]
  ]
})
export class MarketingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
