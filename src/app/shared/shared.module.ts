import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MouseoverDirectiveDirective} from "../directive/mouseover-directive.directive";



@NgModule({
  declarations: [MouseoverDirectiveDirective],
  imports: [CommonModule],
  exports:[MouseoverDirectiveDirective]
})
export class SharedModule { }
