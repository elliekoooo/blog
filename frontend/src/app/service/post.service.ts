import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  getConfigList(){
    return this.http.post("/api/dir", {dir: "../frontend/src/assets/post/2023/08/"});
  }
}
