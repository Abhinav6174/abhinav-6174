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
    this.renderer.setStyle(ripple, 'animation', 'ripple-effect .4s linear');

    this.renderer.listen(ripple, 'animationend', () => {
      this.renderer.removeChild(document.body, ripple);
    });
  }
}
