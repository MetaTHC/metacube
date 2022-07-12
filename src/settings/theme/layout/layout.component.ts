import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  template: `
    <body class="holy-grail">
    <header class="static">
      <meta-header></meta-header>
    </header>
    <div class="holy-grail-body">
      <section class="holy-grail-content p-12">
        <router-outlet *ngIf="true"></router-outlet>
      </section>
    </div>
    <footer class="">
      <meta-footer></meta-footer>
    </footer>
    </body>
  `,
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LayoutComponent {}
