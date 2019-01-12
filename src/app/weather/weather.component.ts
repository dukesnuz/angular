import { Component } from '@angular/core';
import { PostsService } from '../services/post.services';

@Component({
   selector: 'app-weather',
   templateUrl: './weather.component.html',
   styles: [`
      .logo {
          margin-top:15px;
        }
      `],
   providers: [PostsService]
})

export class WeatherComponent {
  data: string;
  tempString: string;
  constructor (private postsService: PostsService) { }
  getWeather(){
    this.postsService.getPosts().subscribe(data => {
       this.data = data;
       this.tempString = data.current_observation.temperature_string;
    }
  );
 }
}