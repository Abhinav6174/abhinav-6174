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
  styleUrls: ['./explorer.component.css'],
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

  @ViewChild('explorer', { static: false }) explorer!: ElementRef;
  isResizing = false;

  isExplorerVisible = false;
  private subscription: Subscription;

  constructor(
    private router: Router,
    public toggleExplorerService: ToggleExplorerService
  ) {
    this.subscription = this.toggleExplorerService.toggleExplorer$.subscribe(
      () => {
        this.toggleExplorer();
      }
    );
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
    if (this.isResizing && this.explorer) {
      const minWidth = 170;
      const maxWidth = 380;
      const newWidth =
        event.clientX -
        this.explorer.nativeElement.getBoundingClientRect().left;

      if (newWidth >= minWidth && newWidth <= maxWidth) {
        this.explorer.nativeElement.style.width = `${newWidth}px`;
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
    if (this.explorer) {
      if (window.innerWidth <= 768) {
        this.explorer.nativeElement.style.display = 'none';
      } else {
        this.explorer.nativeElement.style.display = 'block';
      }
    }
  }

  disableTextSelection(): void {
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none'; /* Chrome/Safari */
  }

  enableTextSelection(): void {
    document.body.style.userSelect = '';
    document.body.style.webkitUserSelect = ''; /* Chrome/Safari */
  }
}
