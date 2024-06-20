import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  productForm: FormGroup;
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {
    this.productForm = new FormGroup({
      label: new FormControl('ff', [
        Validators.required,
        Validators.minLength(3),
      ]),
      thumbnail: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /https?:\/\/(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+(:[0-9]{1,5})?(\/.*)?$/
        ),
      ]),
      price: new FormControl(0),
    });
  }

  submitProduct() {
    this.productsService.postProduct(this.productForm.value).subscribe({
      next: (res) => {
        this.router.navigateByUrl('/products/list');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  get label() {
    return this.productForm.get('label');
  }

  get thumbnail() {
    return this.productForm.get('thumbnail');
  }

  get price() {
    return this.productForm.get('price');
  }
}
