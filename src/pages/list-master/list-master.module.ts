import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { NgArrayPipesModule } from "ngx-pipes/esm";

import { ListMasterPage } from './list-master';

@NgModule({
  declarations: [
    ListMasterPage
  ],
  imports: [
    IonicPageModule.forChild(ListMasterPage),
    TranslateModule.forChild(),
    NgArrayPipesModule
  ],
  exports: [
    ListMasterPage
  ]
})
export class ListMasterPageModule { }
