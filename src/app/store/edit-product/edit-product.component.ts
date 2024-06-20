import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  productForm: FormGroup;
  id: string = '';
  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productForm = new FormGroup({
      label: new FormControl('', [
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

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.retreiveOneProduct(this.id);
    });
  }

  retreiveOneProduct(id: string) {
    this.productsService.getProduct(id).subscribe({
      next: (res) => {
        this.productForm.patchValue(res);
      },
      error: (err) => console.log(err),
    });
  }

  editProduct() {
    const product: Product = {
      ...this.productForm.value,
      id: this.id,
    };

    this.productsService.editProduct(product).subscribe({
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
