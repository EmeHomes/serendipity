import { Component, OnInit } from '@angular/core';
import { AppPageService } from './app-page.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.css']
})
export class AppPageComponent implements OnInit {

  saludo: string;

  constructor(private appPageService: AppPageService, private sessionService: SessionService) { }

  ngOnInit(): void {
    this.appPageService.obtenerSaludo().subscribe( respuesta => {
      this.saludo = respuesta.message
    });
  }

}