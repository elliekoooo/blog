import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  constructor(private router: Router) { }

  get src(){
    let url = this.router.url.split("/");
    //FIXME
    let yyyy = url[1].substring(0,4);
    let mm = url[1].substring(4,6);
    return [yyyy,mm,url[1]].join("/");
  }

  ngOnInit(): void {
  }

}
