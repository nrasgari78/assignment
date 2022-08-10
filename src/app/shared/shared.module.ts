import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MouseoverDirectiveDirective} from "../directive/mouseover-directive.directive";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MatNativeDateModule} from "@angular/material/core";

@NgModule({
  declarations: [MouseoverDirectiveDirective],
  imports: [CommonModule],
  exports:[MouseoverDirectiveDirective,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    ]
})
export class SharedModule { }
