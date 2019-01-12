import { Component } from '@angular/core';
import { WebcamService } from '../services/webcam-service';

@Component ({
    selector: 'app-webcam',
    templateUrl: './webcam.component.html',
    styleUrls: ['./webcam.component.css'],
    providers: [WebcamService]
})

 export class WebcamComponent {

    city: string;
    state: string;
    // webcams: cams[];
    webcams: string;
    message: string;

    constructor(private webcamService: WebcamService) {}

    getWebcams(formValue) {
        this.webcamService.getWebcams(formValue.city, formValue.state)
        .subscribe(
          data => {
              this.webcams = data.webcams;
            },
              err => console.log('error%s, URL: %s', err.status, err.url),
           () => {
                  if (!this.webcams || this.webcams.length === 0) {
                    this.message = 'No Webcams Found';
                      } else {
                        this.message = '';
                      }
                 }
         );
    }
}

