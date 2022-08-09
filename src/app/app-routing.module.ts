import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./com/login/login.component";
import {GridComponent} from "./com/part1/grid/grid.component";

const routes: Routes = [

  {path: '', component: LoginComponent},
  {path: 'list', loadChildren: () => import('./com/part1/part1.module').then(m => m.Part1Module)},

  {
    path: '', component: LoginComponent,
    children: [
      {path: 'dashboard', component: GridComponent, data: {title: 'Grid list data'}},
      {path: 'list', loadChildren: () => import('./com/part1/part1.module').then(m => m.Part1Module)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
