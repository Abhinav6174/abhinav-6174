import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {

  constructor(private router: Router){}

  faClose = faClose;

  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }

}
