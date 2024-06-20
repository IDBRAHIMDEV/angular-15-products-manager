import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { CardProductComponent } from './card-product/card-product.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreComponent } from './store/store.component';
import { StoreRoutingModule } from './store-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './product-form/product-form.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListProductsComponent,
    CardProductComponent,
    StoreComponent,
    AddProductComponent,
    ProductFormComponent,
    EditProductComponent,
    ShowProductComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class StoreModule {}
