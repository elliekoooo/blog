import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  getConfigList(){
    return this.http.post("/api/dir", {}).subscribe(res => {
      //console.log("===test===")
      //console.log(res);
    });
    // return this.http.get("assets/post/config.json");
  }
}
