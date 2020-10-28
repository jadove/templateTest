import { AppComponent } from './../app/app.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() name: string;

  constructor(
    private app: AppComponent
  ) { }

  ngOnInit(): void {
  }

  click(): void{
    this.app.changeClick();
    console.log('done');
  }

}
