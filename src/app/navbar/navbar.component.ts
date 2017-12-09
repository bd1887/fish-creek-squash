import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host: {
    '(window:scroll)': 'navbarSticker()'
  },
})

export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }
  isTopScrolled: boolean = false;
  isNotOnIndexRoute: boolean = false;

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        if (event.url !== '/') {
          this.isNotOnIndexRoute = true;
        } else {
          this.isNotOnIndexRoute = false;
        }
      }
    });

  }
  redirectTo(route) {
    this.router.navigate([route])
  }
  private navbarSticker() {
    if (window.scrollY >= 700) {
      this.isTopScrolled = true;
    } else {
      this.isTopScrolled = false;
    }
  }

}
