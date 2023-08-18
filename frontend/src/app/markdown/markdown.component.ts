import { Component, Input } from '@angular/core';
import { MarkdownPipe } from '../pipe/markdown.pipe';
import { MarkdownService } from '../service/markdown.service';

@Component({
  selector: 'markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss']
})
export class MarkdownComponent {

  text!:string;

  @Input()
  set src(src: string) {
    this.service.parse(src).subscribe(text => {
      this.text = this.pipe.transform(text.split("/*config*/")[1]) as string;
    });
  }

  constructor(private pipe : MarkdownPipe, private service: MarkdownService) { }

}
