import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
    constructor(private http: Http){
    }

getPosts() {
    // return this.http.get('https://jsonplaceholder.typicode.com/posts')
      return this.http.get('http://api.wunderground.com/api/75355b3e4adcf97f/conditions/q/ma/boston.json')
        .map(res => res.json());
  }
}


