import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NgArrayPipesModule } from "ngx-pipes/esm";

import { FavePage } from './fave';

@NgModule({
  declarations: [
    FavePage
  ],
  imports: [
    IonicPageModule.forChild(FavePage)
  ],
  exports: [
    FavePage
  ]
})
export class FavePageModule { }
