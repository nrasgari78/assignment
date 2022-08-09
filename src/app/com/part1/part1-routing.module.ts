import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListdataComponent} from "./listdata/listdata.component";

const routes: Routes = [
  {path:'',component:ListdataComponent,data:{title: 'List data'}},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Part1RoutingModule { }
