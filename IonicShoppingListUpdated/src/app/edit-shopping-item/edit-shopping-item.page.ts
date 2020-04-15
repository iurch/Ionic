import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/models/item.model';
import { ShoppingListService } from 'src/services/shopping-list/shopping-list.service';
import { ToastService } from 'src/services/toast/toast.service';

@Component({
  selector: 'app-edit-shopping-item',
  templateUrl: './edit-shopping-item.page.html',
  styleUrls: ['./edit-shopping-item.page.scss'],
})
export class EditShoppingItemPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private shopping: ShoppingListService, private toast: ToastService) {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
   }

  ngOnInit() {
  }

  saveItem(item: Item) {
    this.shopping.editItem(item)
        .then(()=>{
          this.toast.show(`${item.name} saved!`);
        });
  }

}
