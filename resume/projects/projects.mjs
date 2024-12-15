/** @module projects */

/**
 * @typedef {Object} Project
 * @property {string} title The title of the project
 * @property {string} description A brief description of the project
 * @property {Array<string>} technologies Array of technologies used
 * @property {Array<string>} categories Array of project categories
 * @property {string} [image] URL to project screenshot/demo
 * @property {string} [demo] URL to live demo
 * @property {string} [github] URL to GitHub repository
 * @property {boolean} [featured] Whether this is a featured project
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
    image: "../assets/project-screenshots/dynamic-resume.png",
    github: "https://github.com/nbird11/WDD-131/tree/main/resume",
    demo: "https://wdd131.nbird.dev/resume",
    featured: false
  },
  {
    title: "Orbital Simulator",
    description: "A desktop application simulating the motion of multiple satellites in orbit around the Earth.",
    technologies: ["C++", "unit testing"],
    categories: ["desktop"],
    image: "../assets/project-screenshots/orbital-simulator.png",
    github: "https://github.com/nbird11/Lab12-Orbit-Parts-And-Fragments",
    demo: null,
    featured: true
  },
  {
    title: "Cloud Database Task Manager",
    description: "A task manager application using a cloud database to store and retrieve tasks.",
    technologies: ["Python", "Google Firebase"],
    categories: ["cloud", "cli"],
    image: "../assets/project-screenshots/cloud-database.png",
    github: "https://github.com/nbird11/TaskTracker",
    demo: null,
    featured: false
  }
]

export default projects;