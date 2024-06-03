// import { Component } from '@angular/core';
// import { ToggleExplorerService } from '../service/toggle-service';
// import { Subscription } from 'rxjs';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { CommonModule } from '@angular/common';
// import { HostListener, ViewChild, ElementRef } from '@angular/core';
// import { faFolder, faSearch, faBars, faCode, faClose, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// @Component({
//   selector: 'app-explorer',
//   standalone: true,
//   imports: [FontAwesomeModule, CommonModule],
//   templateUrl: './explorer.component.html',
//   styleUrl: './explorer.component.css'
// })
// export class ExplorerComponent {

//   faFolder = faFolder;
//   faSearch = faSearch;
//   faBars = faBars;
//   faCode = faCode;
//   faClose = faClose;
//   faChevronDown = faChevronDown;
//   faChevronRight = faChevronRight;

//   dropdownStates: { [key: string]: boolean } = {
//     src: false,
//     home: false,
//     projects: false,
//     skills: false,
//     education: false,
//     certifications: false,
//   };

//   @ViewChild('sidebar2', { static: false }) sidebar2!: ElementRef;
//   isResizing = false;

//   isExplorerVisible = false;
//   private subscription: Subscription

//   constructor(public toggleExplorerService: ToggleExplorerService) {
//     this.subscription = this.toggleExplorerService.toggleExplorer$.subscribe(() => {
//       this.toggleExplorer();
//     });
//   }

//   ngAfterViewInit() {
//     this.onResize(null);
//   }

//   ngOnDestroy() {
//     this.subscription.unsubscribe();
//   }

//   toggleDropdown(section: string) {
//     this.dropdownStates[section] = !this.dropdownStates[section];
//   }

//   toggleExplorer() {
//     this.isExplorerVisible = !this.isExplorerVisible;
//   }

//   onMouseDown(event: MouseEvent): void {
//     this.isResizing = true;
//     this.disableTextSelection();
//     document.addEventListener('mousemove', this.onMouseMove);
//     document.addEventListener('mouseup', this.onMouseUp);
//   }

//   onMouseMove = (event: MouseEvent): void => {
//     if (this.isResizing) {
//       const minWidth = 170;
//       const maxWidth = 310;
//       const newWidth = event.clientX - this.sidebar2.nativeElement.getBoundingClientRect().left;

//       if (newWidth >= minWidth && newWidth <= maxWidth) {
//         this.sidebar2.nativeElement.style.width = `${newWidth}px`;
//       }
//     }
//   };

//   onMouseUp = (): void => {
//     this.isResizing = false;
//     this.enableTextSelection();
//     document.removeEventListener('mousemove', this.onMouseMove);
//     document.removeEventListener('mouseup', this.onMouseUp);
//   };

//   @HostListener('window:resize', ['$event'])
//   onResize(event: Event | null): void {
//     if (window.innerWidth <= 768) {
//       this.sidebar2.nativeElement.style.display = 'none';
//     } else {
//       this.sidebar2.nativeElement.style.display = 'block';
//     }
//   }

//   disableTextSelection(): void {
//     document.body.style.userSelect = 'none';
//     document.body.style.webkitUserSelect = 'none';
//     document.body.style.userSelect = 'none';
//   }

//   enableTextSelection(): void {
//     document.body.style.userSelect = '';
//     document.body.style.webkitUserSelect = '';
//     document.body.style.userSelect = '';
//   }

// }



import { Component, AfterViewInit, OnDestroy, HostListener, ViewChild, ElementRef } from '@angular/core';
import { ToggleExplorerService } from '../service/toggle-service';
import { Subscription } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { faFolder, faSearch, faBars, faCode, faClose, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-explorer',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css']
})
export class ExplorerComponent implements AfterViewInit, OnDestroy {

  faFolder = faFolder;
  faSearch = faSearch;
  faBars = faBars;
  faCode = faCode;
  faClose = faClose;
  faChevronDown = faChevronDown;
  faChevronRight = faChevronRight;

  dropdownStates: { [key: string]: boolean } = {
    MYPORTFOLIO: true,
    src: false,
    home: false,
    projects: false,
    skills: false,
    education: false,
    certifications: false,
  };

  @ViewChild('sidebar2', { static: false }) sidebar2!: ElementRef;
  // @ViewChild('sidebarContainer', { static: false }) sidebarContainer!: ElementRef;
  isResizing = false;

  isExplorerVisible = true;
  private subscription: Subscription;

  constructor(private router: Router, public toggleExplorerService: ToggleExplorerService) {
    this.subscription = this.toggleExplorerService.toggleExplorer$.subscribe(() => {
      this.toggleExplorer();
    });
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }

  ngAfterViewInit() {
    this.onResize(null);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleDropdown(section: string) {
    this.dropdownStates[section] = !this.dropdownStates[section];
  }

  toggleExplorer() {
    this.isExplorerVisible = !this.isExplorerVisible;
  }

  onMouseDown(event: MouseEvent): void {
    this.isResizing = true;
    this.disableTextSelection();
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseMove = (event: MouseEvent): void => {
    if (this.isResizing && this.sidebar2) {
      const minWidth = 170;
      const maxWidth = 380;
      const newWidth = event.clientX - this.sidebar2.nativeElement.getBoundingClientRect().left;

      if (newWidth >= minWidth && newWidth <= maxWidth) {
        this.sidebar2.nativeElement.style.width = `${newWidth}px`;
      }
    }
  };

  onMouseUp = (): void => {
    this.isResizing = false;
    this.enableTextSelection();
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  };

  @HostListener('window:resize', ['$event'])
  onResize(event: Event | null): void {
    if (this.sidebar2) {
      if (window.innerWidth <= 768) {
        this.sidebar2.nativeElement.style.display = 'none';
      } else {
        this.sidebar2.nativeElement.style.display = 'block';
      }
    }
  }

  disableTextSelection(): void {
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';  /* Chrome/Safari */
  }

  enableTextSelection(): void {
    document.body.style.userSelect = '';
    document.body.style.webkitUserSelect = '';  /* Chrome/Safari */
  }
}
