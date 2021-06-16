import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './pages/Projects';

const projects = [
  {
    title: 'Group Project 3',
    description: 'Garyphrenalia',
    github: '',
    deploy: 'https://www.heroku.com',
    image: ''
  },
  {
    title: 'Group Project 2',
    description: 'Plant'
  },
  {
    title: 'Group Project 1',
    description: 'Roadtrippers'
  },
  {
    title: 'Weather Dashboard',
    description: 'Simple weather dashboard',
    github: 'https://github.com/NathanHentges/weather-dashboard',
    deploy: 'https://nathanhentges.github.io/weather-dashboard/',
    image: 'https://raw.githubusercontent.com/NathanHentges/weather-dashboard/main/assets/site-preview.png'
  },
  {
    title: 'Work day scheduler',
    description: 'Add notes for each hour left in your work day'
  },
];

function App() {
  return (
    <div>
      <Header />
      <Projects projects={projects}/>
      <Footer />
    </div>
  );
}

export default App;
