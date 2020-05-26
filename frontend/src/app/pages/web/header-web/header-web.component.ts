import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header-web',
  templateUrl: './header-web.component.html',
  styleUrls: ['./header-web.component.css']
})
export class HeaderWebComponent implements OnInit {

  show = true;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.checkRoute();
  }

  scrollTo(elementId: string): void {

    if ('top' === elementId ) {
      top.scrollTo(0, 0);
    }

    const element = document.getElementById(elementId);
    element.scrollIntoView({behavior: 'smooth'});
}
  checkRoute(){
    if ('/home' !== this.router.url) {
      this.show = false;
    }
  }

}
