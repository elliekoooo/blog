import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { Router } from '@angular/router';

type Config = {
  title: string,
  date: string 
};

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {
  constructor(private service: PostService, private router: Router) { }

  list!: Config[];
  currNo: string = "";

  ngOnInit(): void {
    this.service.getConfigList();
  }

  navigate(date:string, no: number): void{
    this.currNo = [date.replace(/-/g, ""), no].join("/");
    this.router.navigate([this.currNo]);
  }

  isFocus(date: string, no: number): boolean{
    return [date.replace(/-/g, ""), no].join("") == this.currNo;
  }

}
