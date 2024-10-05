// src/App.js
import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import './styles.css';

function App() {
  const profileImage = '/assets/profile.jpg'; // Path relative to public folder
  const resumeLink = '/assets/Resume.pdf';
  const socialLinks = [
    { url: 'https://linkedin.com/in/naghulpranavkk', icon: 'fab fa-linkedin' },
    { url: 'https://github.com/naghulpranavkk', icon: 'fab fa-github' }
  ];
  const skills = [
    [
      { icon: 'fab fa-python', name: 'Python' },
      { icon: 'fab fa-java', name: 'Java' },
      { icon: 'fas fa-code', name: 'Golang' },
      { icon: 'fab fa-js', name: 'Javascript' }
    ],
    [
      { icon: 'fab fa-html5', name: 'HTML' },
      { icon: 'fab fa-css3-alt', name: 'CSS' },
      { icon: 'fab fa-react', name: 'React' },
      { icon: 'fab fa-node-js', name: 'Node.js' }
    ],
    [
      { icon: 'fas fa-server', name: 'Firebase' },
      { icon: 'fas fa-database', name: 'MySQL' },
      { icon: 'fas fa-database', name: 'MongoDB' },
      { icon: 'fab fa-git-alt', name: 'Github' }
    ]
  ];
  const projects = [
    {
      image: '/assets/bus-management-system.png',
      title: 'Bus Management System',
      description: 'A web application that allows students and parents to track their respective route buses. In this project I used Leaflet API for the Map Services.',
      technologies: 'HTML, CSS, Bootstrap, JavaScript, Node.js, Express'
    },
    {
      image: '/assets/facts-app.png',
      title: 'Facts App',
      description: 'A web application that provides facts about different engineering fields. This project was done as part of a department-level hackathon.',
      technologies: 'Python, ReactJS'
    }
  ];
  const achievements = [
    'Awarded as Department Level Best Performer for my Coding Contest activities during our College\'s 39th Annual Day',
    '3rd Prize for Idea Presentation at the Department-Level Ideathon at Kongu Engineering College for the project Tour Eaze (a travel and tourism-based site).'
  ];

  return (
    <>
      <Header
        title="Naghul Pranav K K"
        subtitle="Full Stack Developer"
        tagline="Thrive to work in competitive workspace"
        profileImage={profileImage}
        socialLinks={socialLinks}
        resumeLink={resumeLink}
      />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Achievements achievements={achievements} />
      <Footer />
    </>
  );
}

export default App;
