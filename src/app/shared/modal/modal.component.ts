import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() ref!: string | number;
  @Input() title = 'Want to delete this Item ?';

  @Output() deleting = new EventEmitter();
  @Output() cancel = new EventEmitter();

  close() {
    this.isOpen = false;
    this.cancel.emit();
  }

  sendRef() {
    this.deleting.emit(this.ref);
  }
}
