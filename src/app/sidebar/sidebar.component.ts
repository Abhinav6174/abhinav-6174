import { Component, HostListener } from '@angular/core';
import { ToggleExplorerService } from '../service/toggle-service';
import { Router } from '@angular/router';
import { ThemeService } from '../service/theme.service';

@Component({
    selector: 'app-sidebar',
    imports: [],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isSidebar2Visible = true;
  showSettingsMenu = false;
  showThemeSubmenu = false;

  constructor(
    public toggleExplorer: ToggleExplorerService, 
    private router: Router,
    public themeService: ThemeService
  ) {}

  toggleSettingsMenu(event: MouseEvent) {
    event.stopPropagation();
    this.showSettingsMenu = !this.showSettingsMenu;
    if (!this.showSettingsMenu) {
      this.showThemeSubmenu = false;
    }
  }

  toggleThemeSubmenu(event: MouseEvent) {
    event.stopPropagation();
    this.showThemeSubmenu = !this.showThemeSubmenu;
  }

  selectTheme(theme: string, event: MouseEvent) {
    event.stopPropagation();
    this.themeService.setPalette(theme);
    this.showSettingsMenu = false;
    this.showThemeSubmenu = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    this.showSettingsMenu = false;
    this.showThemeSubmenu = false;
  }

  toggleexplorer() {
    this.toggleExplorer.toggleExplorer();
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }

  share(){
    let url = window.location.href;
    const shareData = {
      url: url
    };

    const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);

    if (isMobileDevice && navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Successful share'))
        .catch(error => console.log('Error sharing', error));
    } else {
      this.copyToClipboard(shareData.url);
      alert('Link copied to clipboard.');
    }
  }

  copyToClipboard(text: string) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
}
