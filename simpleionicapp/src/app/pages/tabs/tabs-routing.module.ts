import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  },

  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'people',
    loadChildren: () => import('./pages/people/people.module').then( m => m.PeoplePageModule)
  },
  {
    path: 'planets',
    loadChildren: () => import('./pages/planets/planets.module').then( m => m.PlanetsPageModule)
  },
  {
    path: 'films',
    loadChildren: () => import('./pages/film/film.module').then( m => m.FilmPageModule)
  },
  {
    path: 'film-details',
    loadChildren: () => import('./pages/filmdetails/filmdetails.module').then( m => m.FilmdetailsPageModule)
  },
];

@NgModule({
          imports: [RouterModule.forChild(routes)],
          exports: [RouterModule],
        })
      export class TabsPageRoutingModule { }
