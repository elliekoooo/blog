import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { MarkdownPipe } from '../pipe/markdown.pipe';
import { MarkdownService } from '../service/markdown.service';

@Component({
  selector: 'markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss']
})
export class MarkdownComponent implements OnInit {

  @Input()
  url!: string;
  text!: string;

  constructor(private pipe : MarkdownPipe, private service: MarkdownService) { }

  ngOnInit(): void {
    this.service.parse(this.url).subscribe(text => {
      this.text = this.pipe.transform(text) as string;
    });    
  }

}
