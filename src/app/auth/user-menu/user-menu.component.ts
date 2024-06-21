import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css'],
})
export class UserMenuComponent {
  @Output() deconnect = new EventEmitter();

  logout() {
    this.deconnect.emit();
  }
}
