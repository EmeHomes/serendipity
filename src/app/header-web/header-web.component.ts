import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header-web',
  templateUrl: './header-web.component.html',
  styleUrls: ['./header-web.component.css']
})
export class HeaderWebComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(elementId: string): void { 

    if ('top' === elementId ) {
      top.scrollTo(0,0);
    }

    const element = document.getElementById(elementId);
    element.scrollIntoView({behavior: "smooth"})
}

}
