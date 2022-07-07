import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {RouterModule} from "@angular/router";
import {appHome} from "./home.routing";
import {SharedModule} from "../../../settings/shared/shared.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(appHome),
    SharedModule,
  ]
})
export class HomeModule { }
