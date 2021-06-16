import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './pages/Projects';

const projects = [
  {
    title: 'Mock Store Front',
    description: 'A group project with 3 other developers',
    github: 'https://github.com/lpaschka37/MERN_Project3',
    deploy: 'https://pure-shore-88337.herokuapp.com/#/',
    image: 'https://raw.githubusercontent.com/lpaschka37/MERN_Project3/main/screenshot.png'
  },
  {
    title: 'Plant',
    description: 'A group project with 3 other developers',
    github: 'https://github.com/kelseysanderson/project_two',
    deploy: 'https://plant-project123.herokuapp.com/',
    image: 'https://user-images.githubusercontent.com/79335372/116010244-670d0d80-a5e3-11eb-8941-4552c9bc4e42.png'
  },
  {
    title: 'Roadtrippers',
    description: 'A group project with 3 other developers',
    github: 'https://github.com/jmalm79/group_project_1_roadtrippers',
    deploy: 'https://jmalm79.github.io/group_project_1_roadtrippers/',
    image: 'https://raw.githubusercontent.com/jmalm79/group_project_1_roadtrippers/develop/assets/roadtrippers_group_project.jpg'
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
    description: 'Add notes for each hour left in your work day',
    github: 'https://github.com/NathanHentges/work-day-scheduler',
    deploy: 'https://nathanhentges.github.io/work-day-scheduler/',
    image: 'https://raw.githubusercontent.com/NathanHentges/work-day-scheduler/main/assets/site-preview.png'
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
