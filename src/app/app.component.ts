// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { Router, ActivatedRoute } from '@angular/router';
// import { HostListener, ViewChild, ElementRef } from '@angular/core';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { CommonModule } from '@angular/common';
// import { faFolder, faSearch, faCode, faClose, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import { HomeComponent } from './home/home.component';
// import { CertificationsComponent } from './certifications/certifications.component';
// import { EducationComponent } from './education/education.component';
// import { ExperienceComponent } from './experience/experience.component';
// import { ProjectsComponent } from './projects/projects.component';
// import { SkillsComponent } from './skills/skills.component';

// @Component({
//     selector: 'app-root',
//     standalone: true,
//     templateUrl: './app.component.html',
//     styleUrl: './app.component.css',
//     imports: [RouterOutlet, HomeComponent, ExperienceComponent, SkillsComponent, EducationComponent, ProjectsComponent, CertificationsComponent, FontAwesomeModule, CommonModule]
// })
// export class AppComponent {

//   faFolder = faFolder;
//   faSearch = faSearch;
//   faCode = faCode;
//   faClose = faClose;
//   faChevronDown = faChevronDown;
//   faChevronRight = faChevronRight;

//   dropdownOpen = false;

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
//   sidebarLeftPosition = 0;

//   constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  
//   toggleDropdown(section: string) {
//     this.dropdownStates[section] = !this.dropdownStates[section];
//   }

//   isActive(route: string): boolean {
//     return this.router.isActive(route, true);
//   }

//   navigateTo(route: string) {
//     this.router.navigateByUrl(route);
//   }

//   toggleDropdown1(){
//     this.dropdownOpen = !this.dropdownOpen;
//   }

//   onMouseDown(event: MouseEvent): void {
//     this.isResizing = true;
//     this.disableTextSelection();
//     document.addEventListener('mousemove', this.onMouseMove);
//     document.addEventListener('mouseup', this.onMouseUp);
//   }

//   //onMouseMove = (event: MouseEvent): void => {
//   //  if (this.isResizing) {
//   //    const newWidth = event.clientX - this.sidebar2.nativeElement.getBoundingClientRect().left;
//   //     this.sidebar2.nativeElement.style.width = `${newWidth}px`;
//   //  }
//   //};

//   //onMouseMove = (event: MouseEvent): void => {
//   //  if (this.isResizing) {
//   //    const sidebarWidth = this.sidebar2.nativeElement.offsetWidth;
//   //    const newWidth = event.clientX - this.sidebar2.nativeElement.getBoundingClientRect().left;
//   //    const newLeftPosition = event.clientX - sidebarWidth;
//   //    this.sidebarLeftPosition = newLeftPosition > 0 ? newLeftPosition : 0; // Prevent sidebar from going beyond left edge
//   //    this.sidebar2.nativeElement.style.width = `${newWidth}px`;
//   //  }
//   //};

//   onMouseMove = (event: MouseEvent): void => {
//     if (this.isResizing) {
//       const sidebarWidth = this.sidebar2.nativeElement.offsetWidth;
//       const newWidth = event.clientX - this.sidebar2.nativeElement.getBoundingClientRect().left;
//       const newLeftPosition = event.clientX - sidebarWidth;
//       const minWidth = 170;
//       const maxWidth = 270;
  
//       // Check if new width is greater than minimum width before resizing
//       if (newWidth >= minWidth && newWidth <= maxWidth) {
//         this.sidebarLeftPosition = newLeftPosition > 0 ? newLeftPosition : 0;
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
//   onResize(event: Event): void {
//     if (window.innerWidth <= 768) {
//       this.sidebar2.nativeElement.style.display = 'none';
//     } else {
//       this.sidebar2.nativeElement.style.display = 'block';
//     }
//   }

//   disableTextSelection(): void {
//     document.body.style.userSelect = 'none';
//     document.body.style.webkitUserSelect = 'none';  /* Chrome/Safari */
//     document.body.style.userSelect = 'none';      /* IE/Edge */
//   }
  
//   enableTextSelection(): void {
//     document.body.style.userSelect = '';
//     document.body.style.webkitUserSelect = '';  /* Chrome/Safari */
//     document.body.style.userSelect = '';      /* IE/Edge */
//   }

// }





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
  ],
})
export class AppComponent implements AfterViewInit {
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

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  
  ngAfterViewInit() {
    // Make sure sidebar2 is initialized before accessing it
    this.onResize(null);
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

  @HostListener('window:resize', ['$event'])
  onResize(event: Event | null): void {
    if (window.innerWidth <= 768) {
      this.sidebar2.nativeElement.style.display = 'none';
    } else {
      this.sidebar2.nativeElement.style.display = 'block';
    }
  }

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
