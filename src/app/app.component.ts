import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { HostListener, ViewChild, ElementRef } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { faFolder, faSearch, faBars, faCode, faClose, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { HomeComponent } from './home/home.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { FooterComponent } from './footer/footer.component';
import { ToggleExplorerService } from './service/toggle-service';
import { Subscription } from 'rxjs';
import { OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        HomeComponent,
        ExperienceComponent,
        SkillsComponent,
        EducationComponent,
        ProjectsComponent,
        CertificationsComponent,
        FontAwesomeModule,
        CommonModule,
        HeaderComponent,
        SidebarComponent,
        ExplorerComponent,
        FooterComponent
    ]
})
export class AppComponent implements OnDestroy  {
  faFolder = faFolder;
  faSearch = faSearch;
  faBars = faBars;
  faCode = faCode;
  faClose = faClose;
  faChevronDown = faChevronDown;
  faChevronRight = faChevronRight;

  dropdownOpen = false;
  isSidebar2Visible = true;

  dropdownStates: { [key: string]: boolean } = {
    src: false,
    home: false,
    projects: false,
    skills: false,
    education: false,
    certifications: false,
  };

  @ViewChild('sidebar2', { static: false }) sidebar2!: ElementRef;
  isResizing = false;
  private subscription: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public toggleExplorerService: ToggleExplorerService) {
    this.subscription = this.toggleExplorerService.toggleExplorer$.subscribe(() => {
      this.toggleSidebar2();
    });
  }
  
  // ngAfterViewInit() {
  //   this.onResize(null);
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleDropdown(section: string) {
    this.dropdownStates[section] = !this.dropdownStates[section];
  }

  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }

  toggleDropdown1() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleSidebar2() {
    this.isSidebar2Visible = !this.isSidebar2Visible;
  }

  onMouseDown(event: MouseEvent): void {
    this.isResizing = true;
    this.disableTextSelection();
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseMove = (event: MouseEvent): void => {
    if (this.isResizing) {
      const minWidth = 170;
      const maxWidth = 310;
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

  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event | null): void {
  //   if (window.innerWidth <= 768) {
  //     this.sidebar2.nativeElement.style.display = 'none';
  //   } else {
  //     this.sidebar2.nativeElement.style.display = 'block';
  //   }
  // }

  disableTextSelection(): void {
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';  /* Chrome/Safari */
    document.body.style.userSelect = 'none';      /* IE/Edge */
  }

  enableTextSelection(): void {
    document.body.style.userSelect = '';
    document.body.style.webkitUserSelect = '';  /* Chrome/Safari */
    document.body.style.userSelect = '';      /* IE/Edge */
  }
}
