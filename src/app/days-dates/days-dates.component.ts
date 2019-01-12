import { Component } from '@angular/core';

@Component({
    selector: 'app-days-dates',
    templateUrl: './days-dates.component.html'
})

export class DaysDatesComponent{
    ngForTitle : string;
    constructor (){
        this.ngForTitle ='Using *ngFor to Biuld a List';
    }
    days =['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday'];
    todaysDate = new Date();
}
