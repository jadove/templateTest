import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageModule } from './main-page/main-page.module';

const routes: Routes = [
  { path: 'template', loadChildren: './main-page/main-page.module#MainPageModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
