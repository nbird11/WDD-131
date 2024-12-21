/** @module projects */

/**
 * @typedef {Object} Project
 * @property {string} title The title of the project
 * @property {string} description A brief description of the project
 * @property {Array<string>} technologies Array of technologies used
 * @property {Array<string>} categories Array of project categories
 * @property {string | null} image URL to project screenshot/demo
 * @property {string | null} demo URL to live demo
 * @property {string | null} github URL to GitHub repository
 * @property {boolean} featured Whether this is a featured project
 * @property {string} date When the project was worked on
 */

/**
 * @type {Array<Project>}
 */
const projects = [
  {
    title: "Dynamic Resume",
    description: "A dynamic resume website built with vanilla JavaScript and CSS.",
    technologies: ["HTML", "CSS", "JavaScript"],
    categories: ["web", "portfolio"],
    image: "assets/dynamic-resume.png",
    demo: "https://wdd131.nbird.dev/resume",
    github: "https://github.com/nbird11/WDD-131/tree/main/resume",
    featured: false,
    date: "Late 2024"
  },
  {
    title: "Orbital Simulator",
    description: "A desktop application simulating the motion of multiple satellites in orbit around the Earth.",
    technologies: ["C++", "unit testing", "integration testing", "OOP", "Polymorphism"],
    categories: ["desktop"],
    image: "assets/orbital-simulator.png",
    demo: "https://www.youtube.com/watch?v=kfa3_v3tMLA",
    github: "https://github.com/nbird11/Lab12-Orbit-Parts-And-Fragments",
    featured: true,
    date: "Late 2024"
  },
  // {
  //   title: "QuickPen",
  //   description: "A writing application built for writers to quickly jot down ideas.",
  //   technologies: ["HTML", "CSS", "JavaScript"],
  //   categories: ["web"],
  //   image: "assets/quickpen.png",
  //   demo: "https://nbird.dev/quickPen",
  //   github: null,
  //   featured: false,
  //   date: "Mid 2024"
  // },
  {
    title: "Weather Station",
    description: "A 'weather station' built using an Elegoo Arduino Uno, a DHT11 temperature and humidity sensor, a photocell, and a 16x2 LCD display.",
    technologies: ["Arduino", "C++", "Electronics hardware"],
    categories: ["embedded", "hardware"],
    image: "assets/weather-station.jpg",
    demo: null,
    github: null,
    featured: false,
    date: "Late 2024"
  },
  {
    title: "C++ Chess",
    description: "A chess game built in C++ using OpenGL for graphics. Features all chess piece movements, including castling, en passant, and promotion.",
    technologies: ["C++", "unit testing", "integration testing", "OOP", "Polymorphism"],
    categories: ["desktop"],
    image: "assets/chess.png",
    demo: "https://www.youtube.com/watch?v=gQPv6X5eD1E",
    github: "https://github.com/nbird11/Lab06-ChessFinal",
    featured: false,
    date: "Late 2024"
  },
  {
    title: "Fan Controller",
    description: "A fan controller built using an Arduino Uno, a DC motor with the fan attachment, a 5V PWM and battery pack to power the fan, and joystick to control the speed and direction of the fan.",
    technologies: ["Arduino", "C++", "Electronics hardware"],
    categories: ["embedded", "hardware"],
    image: "assets/fan-control.jpg",
    demo: null,
    github: null,
    featured: false,
    date: "Late 2024"
  },
  {
    title: "Punch Clock",
    description: "A time-tracking web application evolved from a CLI tool that utilized Google Sheets API integration. Calculates work hours and allows you to easily see when you've hit a certain number of hours. Now a full-stack authenticated web app accessible from any device.",
    technologies: ["Full Stack", "Authentication", "Google Sheets API"],
    categories: ["web", "cli"],
    image: "assets/punch-clock.png",
    demo: "https://nbird.dev/punch",
    github: "https://github.com/nbird11/punch/tree/mac",
    featured: true,
    date: "Mid 2024"
  },
  {
    title: "NBird HTTP Go Webserver",
    description: "A Raspberry Pi-hosted webserver written in Go, serving static content and REST endpoints for various personal projects. Currently hosting this portfolio site.",
    technologies: ["Go", "Raspberry Pi", "REST API"],
    categories: ["web", "server"],
    image: "assets/nbird-http.png",
    demo: "https://nbird.dev",
    github: "https://github.com/nbird11/NbirdHttp",
    featured: true,
    date: "Mid 2024"
  },
  {
    title: "Journal Bird App",
    description: "A mobile journaling application developed as part of Angular framework research. Features comprehensive journaling capabilities with a focus on user experience.",
    technologies: ["Angular", "TypeScript", "Ionic", "Mobile Development"],
    categories: ["web", "mobile"],
    image: "assets/journal-bird.png",
    demo: "https://www.youtube.com/watch?v=3DLyW0TV9Mg",
    github: "https://nbird11.github.io/Journal-Bird-Web-Utils/",
    featured: true,
    date: "Early 2024"
  },
  {
    title: "M777 Howitzer Simulator",
    description: "A simulation of the M777 Howitzer, built in C++ using OpenGL for graphics. Features accurate physics and ballistics calculations, taking into account the effects of differing drag, speed of sound, and gravity at different altitudes.",
    technologies: ["C++", "unit testing", "OOP"],
    categories: ["desktop"],
    image: "assets/howitzer.png",
    demo: "https://www.youtube.com/watch?v=HwkHCsVkrf8&t=2s",
    github: null,
    featured: false,
    date: "Early 2024"
  },
  {
    title: "Apollo 11 Lunar Lander Simulator",
    description: "A simulation of the Apollo 11 Lunar Lander, built in C++ using OpenGL for graphics. Features accurate physics of the lander under the effects of lunar gravity.",
    technologies: ["C++", "unit testing", "OOP"],
    categories: ["desktop"],
    image: "assets/lunar-module.png",
    demo: "https://www.youtube.com/watch?v=0PfekaaeC-M",
    github: null,
    featured: false,
    date: "Early 2024"
  },
  {
    title: "Cloud Database Task Manager",
    description: "A task manager CLI application using Google Firebase (Firestore) to store and retrieve tasks.",
    technologies: ["Python", "Google Firebase"],
    categories: ["cli", "cloud", "database"],
    image: "assets/cloud-database.jpg",
    github: "https://github.com/nbird11/TaskTracker",
    demo: "https://www.youtube.com/watch?v=5ToeDJayhyM",
    featured: false,
    date: "Late 2023"
  },
  {
    title: "JDBC PostgreSQL Expense Tracker",
    description: "A refactored version of the Java Expense Tracker using PostgreSQL database instead of CSV files, showcasing database integration and JDBC implementation.",
    technologies: ["Java", "PostgreSQL", "JDBC", "OOP"],
    categories: ["cli", "database"],
    image: "assets/jdbc.jpg",
    demo: "https://www.youtube.com/watch?v=n8u5SfMi4Ik",
    github: "https://github.com/nbird11/ExpensesJavaPostgreSQL",
    featured: false,
    date: "Late 2023"
  },
  {
    title: "Rust File Cipher Encryption",
    description: "A file encryption tool built in Rust, demonstrating systems programming and cipher encryption implementation.",
    technologies: ["Rust", "Encryption"],
    categories: ["cli", "security"],
    image: "assets/rust-encryption.png",
    demo: "https://www.youtube.com/watch?v=qgMK2szVrjY",
    github: "https://github.com/nbird11/LazyFileEncryptionRust",
    featured: false,
    date: "Late 2023"
  },
  {
    title: "Java Expense Tracker",
    description: "An expense tracking application built in Java, featuring CSV file storage and basic expense management functionality.",
    technologies: ["Java", "File I/O", "csv", "OOP"],
    categories: ["cli"],
    image: "assets/java.png",
    demo: "https://www.youtube.com/watch?v=jgFlINb02KQ",
    github: "https://github.com/nbird11/ExpenseTrackerJava",
    featured: false,
    date: "Late 2023"
  },
  {
    title: "Directory Tree Scanner",
    description: "A cli tool that scans a directory and prints out the directory tree. Similar to the 'tree' command in Unix/Linux. Added colors to distinguish depth since the demo.",
    technologies: ["TypeScript", "CLI", "Node.js"],
    categories: ["cli"],
    image: "assets/tree.png",
    demo: "https://www.youtube.com/watch?v=RPz6n9gmK1c",
    github: "https://github.com/nbird11/DirectoryScannerTS",
    featured: false,
    date: "Late 2023"
  },
  {
    title: "Folder Organizer",
    description: "A GUI application built with customtkinter that helps users create organized directory systems. Built for my roommate at university to automatically generate his course unit folders. My first real project for a client.",
    technologies: ["Python", "customtkinter", "GUI Development"],
    categories: ["desktop"],
    image: "assets/folder-organizer.png",
    demo: null,
    github: "https://github.com/nbird11/fileSystemGenerator",
    featured: true,
    date: "Late 2023"
  },
];

export default projects;