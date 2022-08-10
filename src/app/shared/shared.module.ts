import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MouseoverDirectiveDirective} from "../directive/mouseover-directive.directive";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [MouseoverDirectiveDirective],
  imports: [CommonModule],
  exports:[MouseoverDirectiveDirective,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule

    ]
})
export class SharedModule { }
