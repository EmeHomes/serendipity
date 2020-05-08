import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-us-page',
  templateUrl: './us-page.component.html',
  styleUrls: ['./us-page.component.css']
})
export class UsPageComponent implements OnInit {

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
