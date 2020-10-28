import { Component } from '@angular/core';
import { VERSION } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Template Made with Angular ' + VERSION.full;
  subtitle = 'Made for Gibraltartech';
  clicked = false;

  click(): void {
    this.clicked = !this.clicked;
  }
}
