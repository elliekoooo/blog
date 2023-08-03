import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import * as fns from 'date-fns';

type ConfigList = {
  title: string,
  date: string 
}[];

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {
  constructor(private service: PostService) { }

  list!: ConfigList;
  curDate: Date = new Date();

  ngOnInit(): void {
    let yyyy: string = fns.format(this.curDate, "yyyy");
    let mm: string = fns.format(this.curDate, "MM")

    this.service.getConfigList("").subscribe((c:any) => {
      this.list = c[yyyy]?.[mm];
    });
  }

  



}
