import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Part1RoutingModule } from './part1-routing.module';
import { ListdataComponent } from './listdata/listdata.component';
import { GridComponent } from './listdata/grid/grid.component';
import {SharedModule} from "../../shared/shared.module";
import { FormdataComponent } from './formdata/formdata.component';
import { CodingGetListComponent } from './formdata/coding-get-list/coding-get-list.component';


@NgModule({
  declarations: [
    ListdataComponent,
    GridComponent,
    FormdataComponent,
    CodingGetListComponent
  ],
  imports: [
    CommonModule,
    Part1RoutingModule,
    SharedModule
  ]
})
export class Part1Module { }
