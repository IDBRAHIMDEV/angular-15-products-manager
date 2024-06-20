import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @Input()
  footerText = `Copyright © 2024/${new Date().getFullYear()} - All right reserved by Bright Coding`;
}
