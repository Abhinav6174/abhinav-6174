import { Component } from '@angular/core';
import { ToggleExplorerService } from '../service/toggle-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isSidebar2Visible = true;

  constructor(public toggleExplorer: ToggleExplorerService, private router: Router) {
    
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
      //title: 'Check this out',
      //text: 'My Portfolio',
      //url: 'https://abhinav6174.github.io/abhinav-6174',
      url: url
    };

    // Check if the device is a mobile device
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
