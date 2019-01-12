import { Component } from '@angular/core';

@Component({
    selector: 'app-header-banner',
    templateUrl: './header-banner.component.html',
    styleUrls: ['./header-banner.component.css']
})

export class HeaderBannerComponent {
    // using interpolation
    heading = 'Angular App #1';
    headingSub: string;
    displayAbout: boolean;
    displayContact: boolean;
    // using a constructor
  constructor() {
    this.headingSub = 'My First Awesone Dive Into Angular (2)';
    this.displayAbout = false;
    this.displayContact = true;
  }

  toggleAbout(){
      if (this.displayAbout === false){
          this.displayAbout = true;
      } else {
          this.displayAbout = false;
      }
  }

}