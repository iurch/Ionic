import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'bitcoinpage', pathMatch: 'full' },
  { path: 'bitcoinpage', loadChildren: () => import('./bitcoin/bitcoin.module').then( m => m.BitcoinPageModule)},
  {
    path: 'bitcoin',
    loadChildren: () => import('./bitcoin/bitcoin.module').then( m => m.BitcoinPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
