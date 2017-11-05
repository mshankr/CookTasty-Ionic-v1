import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NgArrayPipesModule } from "ngx-pipes/esm";

import { NotificationPage } from './notification';

@NgModule({
  declarations: [
    NotificationPage
  ],
  imports: [
    IonicPageModule.forChild(NotificationPage),
    NgArrayPipesModule
  ],
  exports: [
    NotificationPage
  ]
})
export class NotificationPageModule { }
