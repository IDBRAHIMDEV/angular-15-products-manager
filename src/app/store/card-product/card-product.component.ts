import { Component, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css'],
})
export class CardProductComponent {
  @Input() product!: Product;
}
