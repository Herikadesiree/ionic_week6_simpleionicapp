import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmdetailsPage } from './filmdetails.page';

const routes: Routes = [
  {
    path: '',
    component: FilmdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmdetailsPageRoutingModule {}
