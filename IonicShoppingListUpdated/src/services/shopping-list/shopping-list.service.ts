import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Item } from 'src/models/item.model';

@Injectable()
export class ShoppingListService {
    private shoppingListRef = this.db.list<Item>('shopping-list');

    constructor(private db: AngularFireDatabase) {
        this.getShoppingItem('');
    }

    getShoppingList() {
        return this.shoppingListRef;
    }

    getShoppingItem(key: string) {
        console.log("DEBUGER :::::");
        let _key = '-M2g8_bnnxXKQ-QGFKcd';
        return this.shoppingListRef.snapshotChanges().forEach(o => console.log(o));
    }

    addItem(item: Item) {
        return this.shoppingListRef.push(item);
    }

    editItem(item: Item) {
        return this.shoppingListRef.update(item.key, item);
    }

    removeItem(item: Item) {
        return this.shoppingListRef.remove(item.key);
    }
}
