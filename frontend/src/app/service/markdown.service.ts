import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {

  text!: string;

  constructor(private http: HttpClient) { }

  getMarkdownText(src: string){
    return this.http.get(src, {responseType: 'text'});
  }

  parse(src: string){
    return this.getMarkdownText("./assets/post/2023/08/202308120.md");
  }



}
