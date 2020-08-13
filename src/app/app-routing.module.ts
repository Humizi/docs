import { RouterModule, Routes } from '@angular/router';

import { MainPage } from './modules/main-page/main.page';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: MainPage },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
