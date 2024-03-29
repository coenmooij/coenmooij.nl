import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage, PagesModule } from '../pages';

const routes: Routes = [
  {path: '', component: HomePage},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesModule],
  exports: [RouterModule]
})
export class RoutingModule {
}
