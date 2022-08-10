import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListdataComponent} from "./listdata/listdata.component";
import {FormdataComponent} from "./formdata/formdata.component";

const routes: Routes = [
  {path:'',component:ListdataComponent,data:{title: 'List data'}},
  {path:'formdata',component:FormdataComponent,data:{title: 'Form data'}},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Part1RoutingModule { }
