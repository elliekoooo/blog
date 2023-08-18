import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {

  constructor(private http: HttpClient) { }

  getMarkdownText(src: string){
    return this.http.get(src, {responseType: 'text'});
  }

  parse(fileName: string){
    return this.getMarkdownText(environment.url+fileName+environment.ext);
  }



}
