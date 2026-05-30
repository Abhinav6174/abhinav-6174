import { Component } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-experience',
    imports: [],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  constructor(private title: Title){
    title.setTitle('My Portfolio - Experience');
  }

}
