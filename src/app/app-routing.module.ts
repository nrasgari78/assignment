import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./com/login/login.component";
import {GridComponent} from "./com/part1/listdata/grid/grid.component";

const routes: Routes = [

  {path: '', component: LoginComponent},
  {path: 'part1', loadChildren: () => import('./com/part1/part1.module').then(m => m.Part1Module)},

  // {
  //   path: '', component: LoginComponent,
  //   children: [
  //     {path: 'part1', loadChildren: () => import('./com/part1/part1.module').then(m => m.Part1Module)}
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
