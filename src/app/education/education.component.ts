import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  constructor(private title: Title){
    title.setTitle('My Portfolio - Education');
  }

}
