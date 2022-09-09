import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
    console.log('The product has been shared!');
  }

  onNotify() {
    console.log('You will be notified when the product goes on sale');
  }
}
