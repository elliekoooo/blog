import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  constructor(private router: Router) { }

  url!: string;

  ngOnInit(): void {
    let urls:string[] = this.router.url.split("/");
    //console.log(urls[1]);
  }

}
