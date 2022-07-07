import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FooterComponent,
  HeaderComponent,
  NavbarComponent,
  ToolbarComponent,
  UserbarComponent
} from './components';
import { LayoutComponent } from "./layout/layout.component";
import {RouterModule} from "@angular/router";


const appComponents = [
  HeaderComponent,
  FooterComponent,
  NavbarComponent,
  ToolbarComponent,
  UserbarComponent,
];
const appLayout = [
  LayoutComponent,
];
const appModules = [];
const appPipes = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [CommonModule, ...appComponents, ...appLayout],
  providers: [],
  declarations: [...appComponents, ...appLayout],
})
export class ThemeModule { }
