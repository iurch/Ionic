import { Component, OnInit } from '@angular/core';
import { Item } from 'src/models/item.model';
import { ShoppingListService } from 'src/services/shopping-list/shopping-list.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastService } from 'src/services/toast/toast.service';

@Component({
  selector: 'app-add-shoping-item',
  templateUrl: './add-shoping-item.page.html',
  styleUrls: ['./add-shoping-item.page.scss'],
})
export class AddShopingItemPage implements OnInit {

  item: Item = {
    name: '',
    quantity: undefined,
    price: undefined
  };
  constructor(private shopping: ShoppingListService, private router: Router, private navCtl: NavController, private toast: ToastService) { }

  ngOnInit() {
  }

  addItem(item: Item) {
    this.shopping.addItem(item).then(ref => {
      this.toast.show(`${item.name} saved!`);
      this.router.navigate(['/home']);
    });
  }

}
