import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {

  constructor(private http: HttpClient) { }

  src: string = "./assets/post/2023/07/17/test1.md";

  getMarkdownText(src: string){
    this.http.get(src, {responseType: 'text'}).subscribe(t => {
      
    });
  }



}
