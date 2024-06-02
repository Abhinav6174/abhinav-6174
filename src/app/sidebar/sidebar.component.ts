import { Component } from '@angular/core';
import { ToggleExplorerService } from '../service/toggle-service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isSidebar2Visible = true;

  constructor(public toggleExplorer: ToggleExplorerService) {
    
  }

  toggleexplorer() {
    this.toggleExplorer.toggleExplorer();
  }

  

  // toggleSidebar2() {
  //   this.isSidebar2Visible = !this.isSidebar2Visible;
  // }


}
