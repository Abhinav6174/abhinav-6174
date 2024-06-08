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

}
