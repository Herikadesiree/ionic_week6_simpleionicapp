import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmdetailsPageRoutingModule } from './filmdetails-routing.module';

import { FilmdetailsPage } from './filmdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmdetailsPageRoutingModule
  ],
  declarations: [FilmdetailsPage]
})
export class FilmdetailsPageModule {}
