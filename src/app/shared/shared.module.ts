import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FooterComponent, ModalComponent, AvatarComponent],
  exports: [FooterComponent, ModalComponent, AvatarComponent],
})
export class SharedModule {}
