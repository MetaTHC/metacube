import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FooterComponent,
  HeaderComponent,
  NavbarComponent,
  ToolbarComponent,
  UserbarComponent
} from './components';


const appComponents = [
  HeaderComponent,
  FooterComponent,
  NavbarComponent,
  ToolbarComponent,
  UserbarComponent,
]
const appModules = []
const appPipes = []

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule, ...appComponents],
  providers: [],
  declarations: [...appComponents],
})
export class ThemeModule { }
