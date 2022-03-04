import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('nPrime') nPrime: ElementRef;
  title = 'Prime Numbers ';
  primeNumbers: number[];
  nTmp: number;
  isPrime: any;
  dynamicPadding = 400;

  getN() {
    this.primeNumbers = [];
    this.nTmp = this.nPrime.nativeElement.value;
    let i, j;
    for (i = 2; i <= this.nTmp; i++) {
      this.isPrime = 1;
      for (j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          this.isPrime = 0;
          break;
        }
      }
      if (this.isPrime === 1) {
        this.primeNumbers.push(i);
      }
    }
    if (this.primeNumbers.length > 3) {
      this.dynamicPadding = 20;
    }
  }
}
