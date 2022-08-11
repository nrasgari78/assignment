import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MouseoverDirectiveDirective} from "../directive/mouseover-directive.directive";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {NgxMaskModule} from "ngx-mask";
import { NgxLoadingModule } from "ngx-loading";
import {AutoFocusDirective} from "../directive/auto-focus.directive";

@NgModule({
  declarations: [MouseoverDirectiveDirective,AutoFocusDirective],
  imports: [CommonModule],
  exports:[
    MouseoverDirectiveDirective,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    NgxMaskModule,
    NgxLoadingModule,
    AutoFocusDirective
    ]
})
export class SharedModule { }
