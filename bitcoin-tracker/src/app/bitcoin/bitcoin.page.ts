import { Component, OnInit } from '@angular/core';

import { BitcoinService } from '../bitcoin.service';
import { Bitcoin } from 'src/models/bitcoin.model';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.page.html',
  styleUrls: ['./bitcoin.page.scss'],
})
export class BitcoinPage implements OnInit {

  currency: string = 'GBP';
  bitcoin$: Observable<Bitcoin>
  constructor(private bitcoinProvider: BitcoinService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
      this.getBitcoinPrice();
  }

  getBitcoinPrice() {
   this.bitcoin$ = this.bitcoinProvider.getBitcoinPrice(this.currency);
  }

  geturl(): string {
    return this.bitcoinProvider.getURL(this.currency);
  }
}
