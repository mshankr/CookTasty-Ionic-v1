import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {IonicPageModule} from 'ionic-angular';
import {NgArrayPipesModule} from "ngx-pipes/esm";

import {FavePage} from './fave';

@NgModule({
  declarations: [
    FavePage
  ],
  imports: [
    IonicPageModule.forChild(FavePage),
    TranslateModule.forChild(),
    NgArrayPipesModule
  ],
  exports: [
    FavePage
  ]
})
export class FavePageModule { }
