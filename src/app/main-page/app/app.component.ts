import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  click = false;

  constructor() { }

  ngOnInit(): void {
  }

  public changeClick(): void {
    this.click = !this.click;
  }

}
