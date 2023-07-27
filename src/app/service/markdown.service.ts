import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {

  text!: string;

  constructor(private http: HttpClient) { }

  src: string = "./assets/post/2023/07/17/test1.md";

  getMarkdownText(src: string){
    return this.http.get(src, {responseType: 'text'});
  }

  parse(){
    return this.getMarkdownText(this.src);
  }



}
