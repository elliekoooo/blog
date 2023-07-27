import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { MarkdownModule } from '../markdown/markdown.module';



@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    MarkdownModule
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
