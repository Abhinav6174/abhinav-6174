import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ThemeService } from '../service/theme.service';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('header') header!: ElementRef;

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void { }

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

  next() {
    window.history.forward();
  }

  previous() {
    window.history.back();
  }
  
}
