import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NgArrayPipesModule } from "ngx-pipes/esm";

import { ListMasterPage } from './list-master';

@NgModule({
  declarations: [
    ListMasterPage
  ],
  imports: [
    IonicPageModule.forChild(ListMasterPage),
    NgArrayPipesModule
  ],
  exports: [
    ListMasterPage
  ]
})
export class ListMasterPageModule { }
