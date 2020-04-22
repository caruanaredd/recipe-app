import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeDirectionsPageRoutingModule } from './recipe-directions-routing.module';

import { RecipeDirectionsPage } from './recipe-directions.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeDirectionsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [RecipeDirectionsPage]
})
export class RecipeDirectionsPageModule {}
