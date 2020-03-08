// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule} from '@angular/common/http';

// Routing
import { BitcoinPageRoutingModule } from './bitcoin-routing.module';

// PAGES
import { BitcoinPage } from './bitcoin.page';

// Providers
import { BitcoinService } from '../bitcoin.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BitcoinPageRoutingModule,
    HttpClientModule,
  ],
  providers: [BitcoinService],
  declarations: [BitcoinPage]
})
export class BitcoinPageModule {}
