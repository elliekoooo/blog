import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownComponent } from './markdown.component';
import { MarkdownService } from '../service/markdown.service';
import { SafeHtmlPipe } from '../pipe/safe-html.pipe';
import { MarkdownPipe } from '../pipe/markdown.pipe';


@NgModule({
  declarations: [
    MarkdownComponent,
    SafeHtmlPipe
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
