import { AppComponent } from './../app/app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor(
    private app: AppComponent
  ) { }

  ngOnInit(): void {
  }

  click(): void{
    this.app.changeClick();
  }

}
