import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { DaysDatesComponent } from './days-dates/days-dates.component';
import { FooterComponent } from './footer/footer.component';
import { FormsDisplayComponent } from './forms-display/forms-display.component';
import { HeaderBannerComponent } from './header-banner/header-banner.component';
import { WeatherComponent } from './weather/weather.component';
import { WebcamComponent } from './webcam/webcam.component';

@NgModule({
  declarations: [
    AppComponent,
    DaysDatesComponent,
    FooterComponent,
    FormsDisplayComponent,
    HeaderBannerComponent,
    WeatherComponent,
    WebcamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
