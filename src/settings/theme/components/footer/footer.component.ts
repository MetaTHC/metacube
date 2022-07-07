import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'meta-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FooterComponent {
  get currentYear() {
    return new Date().getFullYear();
  }
}
