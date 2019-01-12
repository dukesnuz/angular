import { Component } from '@angular/core';

@Component({
    selector: 'app-forms-display',
    template:  `
    <h3>{{ title}}</h3>
    <h4>{{ name }}</h4>
    <form>
    <p><label>Your Name: </label>
    <input type = "text" name="name" [(ngModel)]="name" placeholder="Type your name"/></p>
    </form>`,
    styles: ['h4 {font-weight: bold; font-style: italic; color: #00008B}']
})

export class FormsDisplayComponent {
    title: string;
    name: string;

    constructor() {
        this.title = 'Using FormModule and ngModel';
        this.name = '';
    }
}
