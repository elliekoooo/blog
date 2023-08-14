import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownDirective } from './markdown.directive';



@NgModule({
  declarations: [
    MarkdownDirective
  ],
  imports: [
    CommonModule
  ]
})
export class CustomDirectiveModule { }
