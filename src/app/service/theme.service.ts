import { Injectable, signal } from '@angular/core';

interface ThemeTokens {
  [key: string]: string;
}

interface PaletteConfig {
  light: ThemeTokens;
  dark: ThemeTokens;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public isDarkTheme = signal<boolean>(true);
  public currentPalette = signal<string>('concerto');

  /**
   * All theme palettes with their light/dark token values.
   * These are applied as inline styles on <body> to guarantee
   * immediate propagation to every component via CSS variable inheritance.
   */
  private readonly palettes: { [key: string]: PaletteConfig } = {
    concerto: {
      light: {
        '--md-sys-color-primary': '#272B36',
        '--md-sys-color-on-primary': '#FFFFFF',
        '--md-sys-color-primary-container': '#D7D7D6',
        '--md-sys-color-on-primary-container': '#272B36',
        '--md-sys-color-secondary': '#A08A81',
        '--md-sys-color-secondary-container': '#B7B8BB',
        '--md-sys-color-on-secondary-container': '#272B36',
        '--md-sys-color-surface': '#F0F0F0',
        '--md-sys-color-surface-container': '#D7D7D6',
        '--md-sys-color-surface-container-high': '#B7B8BB',
        '--md-sys-color-surface-container-highest': '#A08A81',
        '--md-sys-color-on-surface': '#272B36',
        '--md-sys-color-on-surface-variant': '#595D66',
        '--md-sys-color-outline': '#B7B8BB',
        '--md-sys-color-outline-variant': '#D7D7D6',
        '--vscode-bg': '#F0F0F0',
        '--vscode-sidebar-bg': '#D7D7D6',
        '--vscode-border': '#B7B8BB',
        '--vscode-text': '#272B36',
        '--vscode-icon-hover': '#B7B8BB',
      },
      dark: {
        '--md-sys-color-primary': '#B7B8BB',
        '--md-sys-color-on-primary': '#272B36',
        '--md-sys-color-primary-container': '#A08A81',
        '--md-sys-color-on-primary-container': '#D7D7D6',
        '--md-sys-color-secondary': '#A08A81',
        '--md-sys-color-secondary-container': '#595D66',
        '--md-sys-color-on-secondary-container': '#D7D7D6',
        '--md-sys-color-surface': '#1D2029',
        '--md-sys-color-surface-container': '#272B36',
        '--md-sys-color-surface-container-high': '#363C4A',
        '--md-sys-color-surface-container-highest': '#595D66',
        '--md-sys-color-on-surface': '#D7D7D6',
        '--md-sys-color-on-surface-variant': '#B7B8BB',
        '--md-sys-color-outline': '#595D66',
        '--md-sys-color-outline-variant': '#A08A81',
        '--vscode-bg': '#1D2029',
        '--vscode-sidebar-bg': '#272B36',
        '--vscode-border': '#363C4A',
        '--vscode-text': '#D7D7D6',
        '--vscode-icon-hover': '#595D66',
      }
    },
    original: {
      light: {
        '--md-sys-color-primary': '#6750A4',
        '--md-sys-color-on-primary': '#FFFFFF',
        '--md-sys-color-primary-container': '#EADDFF',
        '--md-sys-color-on-primary-container': '#21005D',
        '--md-sys-color-secondary': '#625B71',
        '--md-sys-color-secondary-container': '#E8DEF8',
        '--md-sys-color-on-secondary-container': '#1D192B',
        '--md-sys-color-surface': '#FEF7FF',
        '--md-sys-color-surface-container': '#F7F2FA',
        '--md-sys-color-surface-container-high': '#F3EDF7',
        '--md-sys-color-surface-container-highest': '#ECE6F0',
        '--md-sys-color-on-surface': '#1C1B1F',
        '--md-sys-color-on-surface-variant': '#49454F',
        '--md-sys-color-outline': '#79747E',
        '--md-sys-color-outline-variant': '#CAC4D0',
        '--vscode-bg': '#FFFFFF',
        '--vscode-sidebar-bg': '#F3EDF7',
        '--vscode-border': '#E6E0E9',
        '--vscode-text': '#1C1B1F',
        '--vscode-icon-hover': '#EADDFF',
      },
      dark: {
        '--md-sys-color-primary': '#D0BCFF',
        '--md-sys-color-on-primary': '#381E72',
        '--md-sys-color-primary-container': '#4F378B',
        '--md-sys-color-on-primary-container': '#EADDFF',
        '--md-sys-color-secondary': '#CCC2DC',
        '--md-sys-color-secondary-container': '#4A4458',
        '--md-sys-color-on-secondary-container': '#E8DEF8',
        '--md-sys-color-surface': '#0F0E13',
        '--md-sys-color-surface-container': '#1A191E',
        '--md-sys-color-surface-container-high': '#211F26',
        '--md-sys-color-surface-container-highest': '#2B2930',
        '--md-sys-color-on-surface': '#E6E0E9',
        '--md-sys-color-on-surface-variant': '#CAC4D0',
        '--md-sys-color-outline': '#938F99',
        '--md-sys-color-outline-variant': '#49454F',
        '--vscode-bg': '#0F0E13',
        '--vscode-sidebar-bg': '#1A191E',
        '--vscode-border': '#2B2930',
        '--vscode-text': '#E6E0E9',
        '--vscode-icon-hover': '#381E72',
      }
    },
    'rose-quartz': {
      light: {
        '--md-sys-color-primary': '#22223B',
        '--md-sys-color-on-primary': '#FFFFFF',
        '--md-sys-color-primary-container': '#C9ADA7',
        '--md-sys-color-on-primary-container': '#22223B',
        '--md-sys-color-secondary': '#9A8C98',
        '--md-sys-color-secondary-container': '#C9ADA7',
        '--md-sys-color-on-secondary-container': '#22223B',
        '--md-sys-color-surface': '#F2E9E4',
        '--md-sys-color-surface-container': '#E5DCD8',
        '--md-sys-color-surface-container-high': '#C9ADA7',
        '--md-sys-color-surface-container-highest': '#9A8C98',
        '--md-sys-color-on-surface': '#22223B',
        '--md-sys-color-on-surface-variant': '#4A4E69',
        '--md-sys-color-outline': '#C9ADA7',
        '--md-sys-color-outline-variant': '#E5DCD8',
        '--vscode-bg': '#F2E9E4',
        '--vscode-sidebar-bg': '#E5DCD8',
        '--vscode-border': '#C9ADA7',
        '--vscode-text': '#22223B',
        '--vscode-icon-hover': '#C9ADA7',
      },
      dark: {
        '--md-sys-color-primary': '#C9ADA7',
        '--md-sys-color-on-primary': '#22223B',
        '--md-sys-color-primary-container': '#4A4E69',
        '--md-sys-color-on-primary-container': '#F2E9E4',
        '--md-sys-color-secondary': '#9A8C98',
        '--md-sys-color-secondary-container': '#363A54',
        '--md-sys-color-on-secondary-container': '#F2E9E4',
        '--md-sys-color-surface': '#161628',
        '--md-sys-color-surface-container': '#22223B',
        '--md-sys-color-surface-container-high': '#363A54',
        '--md-sys-color-surface-container-highest': '#4A4E69',
        '--md-sys-color-on-surface': '#F2E9E4',
        '--md-sys-color-on-surface-variant': '#D8C2BD',
        '--md-sys-color-outline': '#4A4E69',
        '--md-sys-color-outline-variant': '#363A54',
        '--vscode-bg': '#161628',
        '--vscode-sidebar-bg': '#22223B',
        '--vscode-border': '#363A54',
        '--vscode-text': '#F2E9E4',
        '--vscode-icon-hover': '#9A8C98',
      }
    }
  };

  constructor() {
    // Initialize light/dark theme based on preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkTheme.set(savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkTheme.set(prefersDark);
    }

    // Initialize palette selection
    const savedPalette = localStorage.getItem('palette');
    if (savedPalette) {
      this.currentPalette.set(savedPalette);
    }

    this.applyTheme(this.isDarkTheme(), this.currentPalette());
  }

  toggleTheme() {
    this.isDarkTheme.update(val => !val);
    this.applyTheme(this.isDarkTheme(), this.currentPalette());
    localStorage.setItem('theme', this.isDarkTheme() ? 'dark' : 'light');
  }

  setPalette(palette: string) {
    this.currentPalette.set(palette);
    this.applyTheme(this.isDarkTheme(), palette);
    localStorage.setItem('palette', palette);
  }

  private applyTheme(isDark: boolean, palette: string) {
    const body = document.body;
    const root = document.documentElement;

    // Temporarily disable transitions to fix a Chrome/Edge rendering bug where 
    // CSS variable updates fail to trigger repaints on descendants with transitions.
    body.classList.add('theme-transitioning');

    const targets = [body, root];

    for (const target of targets) {
      if (!target) continue;

      // Toggle dark-theme class
      if (isDark) {
        target.classList.add('dark-theme');
      } else {
        target.classList.remove('dark-theme');
      }

      // Swap palette class
      const classesToRemove = Array.from(target.classList).filter(c => c.startsWith('theme-'));
      classesToRemove.forEach(c => target.classList.remove(c));
      target.classList.add(`theme-${palette}`);

      // Strip any inline styles that might have been applied by earlier logic.
      const tokens = this.palettes['concerto']?.['light'];
      if (tokens) {
        for (const property of Object.keys(tokens)) {
          target.style.removeProperty(property);
        }
      }
    }

    // Force a synchronous reflow while transitions are disabled
    void document.body.offsetHeight;

    // Re-enable transitions after the browser has painted the new variables
    setTimeout(() => {
      body.classList.remove('theme-transitioning');
    }, 50);
  }
}
