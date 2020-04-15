import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddShopingItemPage } from './add-shoping-item.page';

const routes: Routes = [
  {
    path: '',
    component: AddShopingItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddShopingItemPageRoutingModule {}
