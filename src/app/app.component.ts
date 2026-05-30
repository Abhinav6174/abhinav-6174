import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { RippleEffectComponent } from './ripple-effect/ripple-effect.component';
import { GoogleAnalyticsService } from './service/google-analytics.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        RippleEffectComponent
    ]
})
export class AppComponent implements OnInit {
    isDarkMode = true;

    constructor(private googleAnalyticsService: GoogleAnalyticsService) {}

    ngOnInit() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            this.isDarkMode = savedTheme === 'dark';
        } else {
            // Default to dark mode or detect system preference
            const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
            this.isDarkMode = !prefersLight;
        }
        this.updateThemeClass();
    }

    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
        this.updateThemeClass();
    }

    updateThemeClass() {
        if (this.isDarkMode) {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
        }
    }
}
