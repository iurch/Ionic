import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'add-shoping-item',
    loadChildren: () => import('./add-shoping-item/add-shoping-item.module').then( m => m.AddShopingItemPageModule)
  },
  {
    path: 'edit-shopping-item',
    loadChildren: () => import('./edit-shopping-item/edit-shopping-item.module').then( m => m.EditShoppingItemPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
