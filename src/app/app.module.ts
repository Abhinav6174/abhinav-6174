
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { HomeComponent } from './home/home.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { EditorComponent } from './editor/editor.component';
import { RippleEffectComponent } from './ripple-effect/ripple-effect.component';
import { APP_BASE_HREF } from '@angular/common';
import { routes } from './app.routes';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { GoogleAnalyticsService } from './service/google-analytics.service';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ExplorerComponent,
    HomeComponent,
    CertificationsComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    FooterComponent,
    EditorComponent,
    RippleEffectComponent,
    RouterModule.forRoot(routes)
  ],
  providers: [
    GoogleAnalyticsService,
    // { provide: APP_BASE_HREF, useValue: '/' }
    //{ provide: LocationStrategy, useClass: HashLocationStrategy }
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [],
  exports: [RouterModule]
})
export class AppModule { }