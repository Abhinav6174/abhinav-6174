import { Component, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-ripple-effect',
  standalone: true,
  imports: [],
  templateUrl: './ripple-effect.component.html',
  styleUrl: './ripple-effect.component.css'
})
export class RippleEffectComponent implements AfterViewInit {

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.listen('document', 'click', (event) => this.applyCursorRippleEffect(event));
  }

  applyCursorRippleEffect(event: MouseEvent) {
    const ripple = this.renderer.createElement('div');
    this.renderer.addClass(ripple, 'ripple');
    this.renderer.appendChild(document.body, ripple);

    this.renderer.setStyle(ripple, 'left', `${event.clientX}px`);
    this.renderer.setStyle(ripple, 'top', `${event.clientY}px`);
    this.renderer.setStyle(ripple, 'animation', 'ripple-effect .3s linear');

    this.renderer.setStyle(ripple, 'cursor', 'url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgawujXWquSQp7BjdSzXnbPbpg6L4_xgBgt4dOM8Cr4F3oMaawiyLDh_8WWr4FwcVbKv5uyW2I9r8YPyfky5L7nSR3j9lKs2QGc8pF-MiOYWfL2zZT3pnW8kzRVPxRDQJSbG5ekiXeFtqWbkGvHdPSCSYcRFlEUG4I4BUlj4FYDG62BPaTFqFhllYxp6mE/s1600/cursor1.png), pointer');

    this.renderer.listen(ripple, 'animationend', () => {
      this.renderer.removeChild(document.body, ripple);
    });

    navigator.vibrate(35);
  }
}
