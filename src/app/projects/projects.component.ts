import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: string; // 'Angular' | 'React' | '.NET' | 'Extension'
}

@Component({
    selector: 'app-projects',
    imports: [CommonModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  categories = ['All', 'Angular', 'React', '.NET', 'Extension'];
  activeCategory = 'All';

  projects: Project[] = [
    {
      title: 'WA Echo Scroll - WhatsApp Chat Viewer',
      description: 'Dive back into your WhatsApp chats with ease. Scroll through old convos like flipping through a photo album. Your memories, alive and ready to explore, anytime.',
      image: 'assets/waechoscroll.png',
      technologies: ['HTML', 'Tailwind CSS', 'TypeScript', 'Angular'],
      githubUrl: '',
      liveUrl: 'https://waechoscroll.web.app/',
      category: 'Angular'
    },
    {
      title: 'Digital Column Clock',
      description: 'It displays the current time in HH:MM:SS format and lets users choose from a wide list of world cities with accurate timezone conversion.',
      image: 'assets/digital-column-clock.png',
      technologies: ['HTML', 'CSS', 'TypeScript', 'Angular'],
      githubUrl: 'https://github.com/Abhinav6174/digital-clock',
      liveUrl: 'https://abhinav6174.github.io/digital-clock/',
      category: 'Angular'
    },
    {
      title: 'LucidVita - Resume Builder',
      description: 'Craft a professional, standout resume effortlessly and take your career to new heights with our intuitive resume builder.',
      image: 'assets/lucid-vita.png',
      technologies: ['HTML', 'Tailwind CSS', 'React Js', 'Firebase'],
      githubUrl: '',
      liveUrl: 'https://lucidvita.web.app/',
      category: 'React'
    },
    {
      title: 'LinkedIn Automation Chrome Extension',
      description: 'Chrome extension to streamline sending LinkedIn connection requests, utilizing dynamic URLs and personalized messages.',
      image: 'assets/linkedin-extension.png',
      technologies: ['HTML', 'CSS', 'Javascript', 'Chrome APIs'],
      githubUrl: '',
      liveUrl: '',
      category: 'Extension'
    },
    {
      title: 'TimeSheet Management Web App',
      description: 'Manage Time Sheet, Send Normal and Recurring Emails, Export Time Sheet to Excel and PDF.',
      image: 'assets/timesheet-app.png',
      technologies: ['HTML', 'CSS', 'ReactJs', '.NET', 'Web API', 'MS SQL'],
      githubUrl: '',
      liveUrl: '',
      category: '.NET'
    },
    {
      title: 'Super Market Web App',
      description: 'Products categorized into sections, manage orders and payment information.',
      image: 'assets/super-market-app.png',
      technologies: ['HTML', 'CSS', 'Javascript', '.NET', 'MVC', 'MS SQL'],
      githubUrl: '',
      liveUrl: '',
      category: '.NET'
    },
    {
      title: 'To-Do List App',
      description: 'Make To-Do lists. Completed tasks are usually moved to a separate section for easy tracking.',
      image: 'assets/to-do-app1.png',
      technologies: ['HTML', 'CSS', 'ReactJs'],
      githubUrl: 'https://github.com/Abhinav6174/to-do-app',
      liveUrl: 'https://abhinav6174.github.io/to-do-app',
      category: 'React'
    },
    {
      title: 'Age Calculator',
      description: 'Calculate your age in days, weeks, months and years, etc.',
      image: 'assets/age-calculator.png',
      technologies: ['HTML', 'CSS', 'ReactJs'],
      githubUrl: 'https://github.com/Abhinav6174/age-calculator',
      liveUrl: 'https://abhinav6174.github.io/age-calculator',
      category: 'React'
    }
  ];

  constructor(private title: Title) {
    title.setTitle('My Portfolio - Projects');
  }

  setCategory(category: string) {
    this.activeCategory = category;
  }

  get filteredProjects(): Project[] {
    if (this.activeCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.activeCategory);
  }
}
