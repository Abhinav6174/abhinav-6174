import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  driveLink: string = "";
  documentId: string | null = "";

  constructor(private title: Title){
    title.setTitle('My Portfolio - Home');
  }

  ngOnInit() {
    this.driveLink = "https://drive.google.com/file/d/1aLDLfIGsDNxPMk9lddl00gmulqueHeHi/view?usp=sharing";
    this.documentId = this.extractGoogleDriveId(this.driveLink);
  }

  extractGoogleDriveId = (url: string) => {
    const regex = /\/d\/([a-zA-Z0-9_-]{33})|id=([a-zA-Z0-9_-]{33})/;
    const match = url.match(regex);
    return match ? (match[1] || match[2]) : null;
  }

  // hiUrl: string = 'https://blogger.googleusercontent.com/img/a/AVvXsEibKcGIiyhOiyD4WXl1MTskyUOCzcFfZOE1IrT2_7lKT4t2FpeMzOOTjNbNDoK1PzgtFQqcrrmH-1_mlE1Z1njbsereqC2GVCfU0iMJcxXJ12bbe_rmMrqf3DJJP3kuIiPvYcHzyQbIu2xw-CwNTMjk9STHonUqQMYXMB8oxdIHEnS8Ryb6eiC2Oux6=s16000';

}
