import React from 'react';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Introcards from './components/Introcards';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className='row h-100'>
      <Navbar />
      <main className='col'>
        <Intro />
        <div className='row'>
          <Introcards />
          <Projects />
          <Resume />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
