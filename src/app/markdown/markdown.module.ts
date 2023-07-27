import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownComponent } from './markdown.component';
import { MarkdownService } from '../service/markdown.service';
import { MarkdownPipe } from '../pipe/markdown.pipe';


@NgModule({
  declarations: [
    MarkdownComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    MarkdownService,
    MarkdownPipe
  ],
  exports: [
    MarkdownComponent
  ]
})
export class MarkdownModule { }
