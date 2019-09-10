import React from 'react';

const Introcards = () => {
  const facts = [
    'I have traveled to over 15 countries!',
    'I have dual citizenship. Brazil and USA.',
    'My daughter is a citizen of three countries. Brazil, South Korea, and USA.',
    "My daughter's name is Lina!",
    'In addition to English, I can speak Portuguese, as well as a bit of Spanish and Korean',
    'I try to read at least 25 books per year.',
    'My favorite authors are Robert Jordan, Brandon Sanderson, Kurt Vonnegut, and Terry Pratchett.',
    'My favorite Marvel show is Jessica Jones.',
    'My dad and I watch every Browns game, every season. Even when they were 0-16.',
    'I have been married for over 5 years!',
    'My favorite dish is bibim guksu (spicy Korean noodles).',
    'I read to my daughter every day.',
    "I'm still a fan of pro-wrestling. It's entertaining!",
    'My favorite movie is The Matrix.',
    'My favorite book is Catch-22 by Joseph Heller.',
    'I drink too much coffee.',
    'My favorite game series is the Super Smash Bros series.',
    'My favorite book series is The Wheel of Time.',
    'I watch Sesame Street almost every day thanks to Lina and PBS Kids.',
    'I lived in South Korea for 3 years working as an English teacher.'
  ];
  var currentFact = facts[Math.floor(Math.random() * facts.length)];
  const generateFact = () => {
    currentFact = facts[Math.floor(Math.random() * facts.length)];
    while (currentFact === document.getElementById('funFacts').innerText) {
      currentFact = facts[Math.floor(Math.random() * facts.length)];
    }
    document.getElementById('funFacts').innerText = currentFact;
  };

  return (
    <div className='col-md-12 bg-white pb-2 p-0'>
      <h1
        id='aboutMe'
        className='text-center bg-dark text-light py-3 border-bottom'
      >
        About Me
      </h1>
      <div className='card-columns text-center'>
        <div className='card text-center' data-aos='slide-right'>
          <i
            className='card-img-top fas fa-laptop-code'
            alt='fact generator'
          ></i>
          <div className='card-body'>
            <h5 className='card-title'>Fun Fact Generator</h5>
            <p className='card-text' id='funFacts' style={{ height: '100px' }}>
              {currentFact}
            </p>
            <button
              className='btn btn-block btn-secondary'
              id='facts'
              onClick={generateFact}
            >
              Generate a New Fact
            </button>
          </div>
        </div>
        <div className='card p-3' data-aos='slide-right'>
          <blockquote className='blockquote mb-0 card-body'>
            <p>
              Full stack developer focused on teamwork and problem solving.
              Driven to meet and exceed client needs and to accommodate team
              members with my background in education. Collaborating with all
              parties and keeping fellow employees tuned into the task on hand
              comes from my background as a teacher for 5 years. While leading
              the implementation of a 1:1 Chromebook program for 4th graders,
              I’ve studied Javascript, HTML, and CSS extensively both alone and
              as part of The University of Arizona’s coding boot camp. The same
              amount of effort required of a Teacher of the Year Nominee from an
              A+ school will be applied to both my lifelong learning and my
              future employer.
            </p>
          </blockquote>
        </div>
        <div className='card' data-aos='fadein'>
          <div className='card-body'>
            <h5 className='card-title'>Hobbies</h5>
            <ul className='card-text list-group list-group-flush'>
              <li className='list-group-item'>Reading</li>
              <li className='list-group-item'>Gaming</li>
              <li className='list-group-item'>Watching sports/esports</li>
            </ul>
          </div>
        </div>
        <div
          className='card bg-info text-white text-center p-1'
          style={{ width: '10rem' }}
          data-aos='fadein'
        >
          <img
            className='img-responsive'
            src='./images/me.jpg'
            alt='Portfolio'
          />
        </div>
        <div className='card text-center' data-aos='slide-up'>
          <i className='card-img-top fas fa-school' alt='school'></i>
          <div className='card-body'>
            <h5 className='card-title'>Education</h5>
            <ul className='card-text text-left'>
              <li>2019 - The University of Arizona Coding Boot Camp</li>
              <li>2016 - Pima Community College (Elementary Certification)</li>
              <li>
                2010 - The University of Arizona (BA in Sociology with a minor
                in Portuguese)
              </li>
            </ul>
          </div>
        </div>
        <div className='card' data-aos='slide-left'>
          <i
            className='card-img-top fas fa-laptop text-center'
            alt='self study'
          ></i>
          <div className='card-body'>
            <h5 className='card-title text-center'>
              Top Sites for Studying Coding
            </h5>
            <ol>
              <li>freeCodeCamp</li>
              <li>Khan Academy</li>
              <li>Code Wars</li>
              <li>The Odin Project</li>
            </ol>
          </div>
        </div>
        <div className='card p-3 text-right' data-aos='slide-left'>
          <blockquote className='blockquote mb-0 d-flex justify-content-between'>
            <i className='fab fa-html5'></i>
            <i className='fab fa-css3-alt'></i>
            <i className='fab fa-js-square'></i>
            <i className='fab fa-bootstrap'></i>
            <i className='fab fa-react'></i>
            <i className='fab fa-node'></i>
            <i className='fas fa-database'></i>
            <i className='fab fa-github'></i>
            <i className='fab fa-java'></i>
            <footer className='blockquote-footer'>
              <small className='text-muted'>Coding toolbox</small>
            </footer>
          </blockquote>
        </div>
        <div className='card' data-aos='slide-left'>
          <div className='card-body'>
            <h5 className='card-title'>Matthew's Favorite Quotes</h5>
            <p className='card-text' id='gr_quote_body'></p>
            <p className='card-text'>
              <a
                href='https://www.goodreads.com/user/show/21696553-matthew-winemiller'
                target='_blank'
                rel='noopener noreferrer'
              >
                <small className='text-muted'>
                  Goodreads Quotes <i className='fab fa-goodreads'></i>
                </small>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introcards;
