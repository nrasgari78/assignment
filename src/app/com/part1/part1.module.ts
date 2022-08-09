import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Part1RoutingModule } from './part1-routing.module';
import { ListdataComponent } from './listdata/listdata.component';
import { GridComponent } from './grid/grid.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ListdataComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    Part1RoutingModule,
    SharedModule
  ]
})
export class Part1Module { }
