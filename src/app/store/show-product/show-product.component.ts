import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css'],
})
export class ShowProductComponent implements OnInit {
  product!: Product;

  isModalOpen = false;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getOneProduct(params['id']);
    });
  }

  getOneProduct(id: string) {
    this.productsService.getProduct(id).subscribe({
      next: (res) => {
        this.product = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  destroyProduct(id: any) {
    this.productsService.deleteProduct(String(id)).subscribe({
      next: (res) => {
        this.closeModal();
        this.router.navigateByUrl('/products/list');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
