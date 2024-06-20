import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FooterComponent, ModalComponent],
  exports: [FooterComponent, ModalComponent],
})
export class SharedModule {}
