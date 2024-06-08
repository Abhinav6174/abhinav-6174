import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @ViewChild('header') header!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.header.nativeElement.addEventListener(
      'wheel',
      this.onWheelEvent.bind(this)
    );
  }

  onWheelEvent(event: WheelEvent) {
    event.preventDefault();
    this.header.nativeElement.scrollLeft += event.deltaY;
  }
}
