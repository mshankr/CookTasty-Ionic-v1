import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {IonicPageModule} from 'ionic-angular';
import {NgArrayPipesModule} from "ngx-pipes/esm";

import {NotificationPage} from './notification';

@NgModule({
  declarations: [
    NotificationPage
  ],
  imports: [
    IonicPageModule.forChild(NotificationPage),
    TranslateModule.forChild(),
    NgArrayPipesModule
  ],
  exports: [
    NotificationPage
  ]
})
export class NotificationPageModule { }
