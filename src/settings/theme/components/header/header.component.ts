import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'meta-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent  {
  collapseNavbar() { }
}
