export interface Experience {
  role: string;
  dateRange: string;
  company: string;
  location: string;
  description: string[];
//   title: string;
}

// export interface Experience {
//     title: string;
//     description: string;
//   }

export const EXPERIENCES: Experience[] = [
  {
    role: 'Software Engineer, Web Developer',
    dateRange: 'April 2023 - Present',
    company: 'TI Solutions Pvt. Ltd.',
    location: 'Lucknow',
    description: [
      'Developed reusable components to optimize code efficiency and accelerate the performance of web applications.',
      'Crafted a responsive frontend interface to elevate user interaction and experience.',
      'Proficiently managed UI utilizing HTML, CSS, TypeScript, and Angular.',
      'Developed RESTful APIs using .NET Web API framework, fostering seamless communication between client and server applications.',
      'Designed and implemented endpoints to support multiple client applications.',
      'Integrated technologies like Entity Framework to optimize database operations, ensuring efficient data handling.',
    ],
  },
  {
    role: '.NET Developer',
    dateRange: 'January 2023 - April 2023',
    company: 'Wipro',
    location: 'Bhubaneswar',
    description: [
      'Learned C# programming fundamentals and syntax, object-oriented programming principles, and basic framework concepts.',
      'Acquired proficiency in core .NET technologies like ASP .NET Core and SQL Server through hands-on exercises and projects.',
      'Built an Online Ads Management web application using C# and ASP .NET Core.',
    ],
  },
];

// export const EXPERIENCES: Experience[] = [
//     {
//       title: 'TI Solutions Pvt. Ltd.',
//       description: 'Developed reusable components to optimize code efficiency and accelerate the performance of web applications. Crafted a responsive frontend interface to elevate user interaction and experience. Proficiently managed UI utilizing HTML, CSS, TypeScript, and Angular. Developed RESTful APIs using .NET Web API framework, fostering seamless communication between client and server applications. Designed and implemented endpoints to support multiple client applications. Integrated technologies like Entity Framework to optimize database operations, ensuring efficient data handling.'
//     },
//     {
//       title: 'Wipro',
//       description: 'Learned C# programming fundamentals and syntax, object-oriented programming principles, and basic framework concepts. Acquired proficiency in core .NET technologies like ASP .NET Core and SQL Server through hands-on exercises and projects. Built an Online Ads Management web application using C# and ASP .NET Core.'
//     }
//   ];