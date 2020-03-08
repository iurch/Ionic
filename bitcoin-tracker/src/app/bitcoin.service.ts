import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Bitcoin } from 'src/models/bitcoin.model';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  private ROOT_URL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC';
  
  constructor(private http: HttpClient) { }


  getBitcoinPrice(currency: string) {
    return this.http.get<Bitcoin>(`${this.ROOT_URL}${currency}`);
  }

  getURL(currency: string): string {
    return `${this.ROOT_URL}${currency}`;
  }
}
