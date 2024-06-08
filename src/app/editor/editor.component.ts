import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css',
})
export class EditorComponent {
  faClose = faClose;
  @ViewChild('fileTabs') fileTabs!: ElementRef;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.fileTabs.nativeElement.addEventListener(
      'wheel',
      this.onWheelEvent.bind(this)
    );
  }

  onWheelEvent(event: WheelEvent): void {
    if (event.deltaY !== 0) {
      event.preventDefault(); // Prevent the default vertical scroll
      this.fileTabs.nativeElement.scrollLeft += event.deltaY;
    }
  }

  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }
}
