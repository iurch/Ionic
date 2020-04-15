import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddShopingItemPageRoutingModule } from './add-shoping-item-routing.module';

import { AddShopingItemPage } from './add-shoping-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddShopingItemPageRoutingModule
  ],
  declarations: [AddShopingItemPage]
})
export class AddShopingItemPageModule {}
