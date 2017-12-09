import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../_animations/index';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  animations: [
    [fadeInAnimation]
  ]
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0)
  }

}
