import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-good-amount-status',
  templateUrl: './good-amount-status.component.html',
  styleUrls: ['./good-amount-status.component.scss'],
})
export class GoodAmountStatusComponent implements OnInit {
  @Input() amount = 0;

  color = '';

  ngOnInit() {
    if (this.amount > 20) {
      this.color = 'green';
    } else if (this.amount >= 5) {
      this.color = 'yellow';
    } else if (this.amount > 0) {
      this.color = 'red';
    }
  }
}
