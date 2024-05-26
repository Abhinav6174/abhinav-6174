import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, ActivatedRoute, UrlSegment , NavigationEnd, UrlTree } from '@angular/router';
import { filter } from 'rxjs/operators';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { faFolder, faSearch, faCode, faClose, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
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
    imports: [RouterOutlet, HomeComponent, ExperienceComponent, SkillsComponent, EducationComponent, ProjectsComponent, CertificationsComponent, FontAwesomeModule, CommonModule]
})
export class AppComponent {

  faFolder = faFolder;
  faSearch = faSearch;
  faCode = faCode;
  faClose = faClose;
  faChevronDown = faChevronDown;
  faChevronRight = faChevronRight;

  dropdownOpen = false;

  dropdownStates: { [key: string]: boolean } = {
    explorer: false,
    home: false,
    projects: false
  };

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  toggleDropdown(section: string) {
    this.dropdownStates[section] = !this.dropdownStates[section];
  }

  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }

  toggleDropdown1(){
    this.dropdownOpen = !this.dropdownOpen;
  }

}
