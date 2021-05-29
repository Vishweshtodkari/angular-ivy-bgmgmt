import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num: number[] = [2, 3, 10, 15, 26, 35, 50, 63];
  ind_number: number;
  index_val: number;

  clickEvent(ind_number) {
    this.index_val = this.num.findIndex(
      fruit => fruit === this.num[ind_number]
    );
  }
}
