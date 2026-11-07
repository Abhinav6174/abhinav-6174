import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

@Component({
    selector: 'app-projects',
    imports: [CommonModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'TextToSql',
      description: 'AI-powered Natural Language to SQL query engine and interactive studio for SQL Server built with .NET 10, Google Gemini, Qdrant Vector DB, and local ONNX embeddings (bge-small-en-v1.5).',
      image: 'assets/texttosql.png',
      technologies: ['C#', '.NET 10', 'Google Gemini', 'Qdrant Vector DB', 'ONNX'],
      githubUrl: '',
      liveUrl: ''
    },
    {
      title: 'DocBridge MCP Server',
      description: 'A Model Context Protocol (MCP) server built with C# .NET 10 that exposes document reading capabilities to AI assistants. This server enabled AI models to read, search and extract content from multiple formats including PDF, Word, PowerPoint, Excel, CSV, HTML, Markdown, JSON, Plain text files and images via OCR.',
      image: 'assets/docbridge.png',
      technologies: ['C#', '.NET 10', 'OCR', 'MCP Protocol', 'AI Assistants'],
      githubUrl: '',
      liveUrl: ''
    },
    {
      title: 'NetScope (Windows Desktop App)',
      description: 'NetScope is a lightweight Windows desktop application that shows your real-time internet download and upload speed in a small always-on-top floating overlay on your screen. It reads live data from your network adapters using Windows performance counters and displays it using WPF.',
      image: 'assets/netscope.png',
      technologies: ['C#', 'WPF', 'Windows Forms', 'AutoUpdater.NET', 'Inno Setup'],
      githubUrl: '',
      liveUrl: ''
    },
    {
      title: 'Digital Column Clock Live Wallpaper (Android)',
      description: 'A beautiful, feature-rich live wallpaper app that displays an animated digital clock on your Android home screen with smooth animations, multiple themes, custom backgrounds, and extensive customization.',
      image: 'assets/column-clock-android.png',
      technologies: ['Kotlin', 'Jetpack Compose', 'Android Canvas API', 'Jetpack DataStore', 'WallpaperService'],
      githubUrl: '',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.abhinav.digitalclockapp'
    },
    {
      title: 'WA Echo Scroll - WhatsApp Chat Viewer',
      description: 'Dive back into your WhatsApp chats with ease. Scroll through old convos like flipping through a photo album. Your memories, alive and ready to explore, anytime.',
      image: 'assets/waechoscroll.png',
      technologies: ['HTML', 'Tailwind CSS', 'TypeScript', 'Angular'],
      githubUrl: '',
      liveUrl: 'https://waechoscroll.web.app/'
    },
    {
      title: 'Digital Column Clock',
      description: 'It displays the current time in HH:MM:SS format and lets users choose from a wide list of world cities with accurate timezone conversion.',
      image: 'assets/digital-column-clock.png',
      technologies: ['HTML', 'CSS', 'TypeScript', 'Angular'],
      githubUrl: 'https://github.com/Abhinav6174/digital-clock',
      liveUrl: 'https://abhinav6174.github.io/digital-clock/'
    },
    {
      title: 'LucidVita - Create Professional Resumes',
      description: 'Craft a professional, standout resume effortlessly and take your career to new heights with our intuitive resume builder.',
      image: 'assets/lucid-vita.png',
      technologies: ['HTML', 'Tailwind CSS', 'React Js', 'Firebase'],
      githubUrl: '#',
      liveUrl: 'https://lucidvita.web.app/'
    },
    {
      title: 'LinkedIn Automation Chrome Extension',
      description: 'Chrome extension to streamline sending LinkedIn connection requests, utilizing dynamic URLs and personalized messages.',
      image: 'assets/linkedin-extension.png',
      technologies: ['HTML', 'CSS', 'Javascript', 'Chrome APIs'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Siddhartha Campus Hub - SAHE (Android)',
      description: 'Siddhartha Campus Hub brings campus announcements, exams, results, placements, events, and academic resources together in one place. Search, bookmark, get notifications, and stay updated automatically.',
      image: 'assets/sahe.png',
      technologies: ['Kotlin', 'Jetpack Compose', 'Cloud Firestore', 'FCM'],
      githubUrl: '',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.vrsec.abhinav'
    },
    {
      title: 'TimeSheet Management Web App',
      description: 'Manage Time Sheet, Send Normal and Recurring Emails, Export Time Sheet to Excel and pdf.',
      image: 'assets/timesheet-app.png',
      technologies: ['HTML', 'CSS', 'RectsJs', '.NET', 'Web API', 'MS SQL'],
      githubUrl: '#',
      liveUrl: '#'
    },
    // {
    //   title: 'Super Market Web App',
    //   description: 'Products categorized into sections, manage orders and payment information',
    //   image: 'assets/super-market-app.png',
    //   technologies: ['HTML', 'CSS', 'Javascript', '.NET', 'MVC', 'MS SQL'],
    //   githubUrl: '#',
    //   liveUrl: '#'
    // },
    {
      title: 'To-Do List App',
      description: 'A customizable task manager to create, organize, and track tasks with priorities, categories, deadlines, subtasks, progress insights, and quick templates. Supports task search, import, and export.',
      image: 'assets/to-do-app.png',
      technologies: ['HTML', 'CSS', 'RectsJs'],
      githubUrl: 'https://github.com/Abhinav6174/to-do-app',
      liveUrl: 'https://abhinav6174.github.io/to-do-app'
    },
    {
      title: 'Age Calculator',
      description: 'An interactive age calculator with live age tracking, birthday countdowns, life milestones, and detailed lifetime statistics.',
      image: 'assets/age-calculator.png',
      technologies: ['HTML', 'CSS', 'RectsJs'],
      githubUrl: 'https://github.com/Abhinav6174/age-calculator',
      liveUrl: 'https://abhinav6174.github.io/age-calculator'
    }
  ];

  constructor(private title: Title){
    title.setTitle('My Portfolio - Projects');
  }

}
