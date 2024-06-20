import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ShowProductComponent } from './show-product/show-product.component';

const routes: Routes = [
  {
    path: '',
    component: StoreComponent,
  },
  {
    path: 'list',
    component: ListProductsComponent,
  },
  {
    path: 'add',
    component: AddProductComponent,
  },
  {
    path: 'edit/:id',
    component: EditProductComponent,
  },
  {
    path: ':id',
    component: ShowProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
