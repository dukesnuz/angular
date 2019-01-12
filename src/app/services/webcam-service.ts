import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WebcamService{

    constructor (private http: Http){}

    getWebcams(city: string, state: string): Observable<any> {
     // return this.http.get('https://jsonplaceholder.typicode.com/posts')
       return this.http.get(`http://api.wunderground.com/api/75355b3e4adcf97f/webcams/q/${state}/${city}.json`)
        .map (res => res.json());
    }
}
