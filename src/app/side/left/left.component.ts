import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'src/app/service/markdown.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {

  constructor(private markdown: MarkdownService) { }

  test!: string;

  ngOnInit(): void {

  }



}
