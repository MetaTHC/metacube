import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'meta-userbar',
  templateUrl: './userbar.component.html',
  styleUrls: ['./userbar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
