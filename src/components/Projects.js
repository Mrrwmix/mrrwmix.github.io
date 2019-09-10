import React from "react";

const Projects = () => {
  const projects = [
    {
      img: "./images/khan.PNG",
      anchor: [
        {
          title: "Khan Academy Projects",
          link: "https://www.khanacademy.org/profile/Mirthew/projects"
        }
      ]
    },
    {
      img: "./images/codepen.PNG",
      anchor: [
        { title: "Codepen Projects", link: "https://codepen.io/mrrwmix/" }
      ]
    },
    {
      img: "./images/github.jpg",
      anchor: [{ title: "Github", link: "https://github.com/Mrrwmix" }]
    },
    {
      img: "./images/linkedin.png",
      anchor: [
        {
          title: "LinkedIn",
          link: "https://www.linkedin.com/in/matthew-winemiller-27497b37/"
        }
      ]
    },
    {
      img: "./images/codewars.png",
      anchor: [
        {
          title: "Codewars Profile",
          link: "https://www.codewars.com/users/Mrrwmix"
        }
      ]
    },
    {
      img: "./images/teaching.JPG",
      anchor: [
        { title: "Teaching Portfolio", link: "http://mattman88.blogspot.com/" }
      ]
    },
    {
      img: "./images/psychic.PNG",
      anchor: [
        {
          title: "Psychic Game",
          link: "https://mrrwmix.github.io/Psychic-Game"
        },
        {
          title: "Source Code",
          link: "https://github.com/Mrrwmix/Psychic-Game"
        }
      ]
    },
    {
      img: "./images/mariotile.PNG",
      anchor: [
        {
          title: "Crystals Collector Game",
          link: "https://mrrwmix.github.io/unit-4-game"
        },
        {
          title: "Source Code",
          link: "https://github.com/Mrrwmix/unit-4-game"
        }
      ]
    },
    {
      img: "./images/heroesvsvillains.png",
      anchor: [
        {
          title: "Heroes vs. Villains RPG",
          link: "https://mrrwmix.github.io/unit-4-RPG-game"
        },
        {
          title: "Source Code",
          link: "https://github.com/Mrrwmix/unit-4-RPG-game"
        }
      ]
    },
    {
      img: "./images/trivia.PNG",
      anchor: [
        {
          title: "The Wheel of Time Trivia",
          link: "https://mrrwmix.github.io/TriviaGame"
        },
        { title: "Source Code", link: "https://github.com/Mrrwmix/TriviaGame" }
      ]
    },
    {
      img: "./images/trainscheduler.png",
      anchor: [
        {
          title: "Train Scheduler",
          link: "https://mrrwmix.github.io/TrainScheduler"
        },
        {
          title: "Source Code",
          link: "https://github.com/Mrrwmix/TrainScheduler"
        }
      ]
    },
    {
      img: "./images/tipcalc.png",
      anchor: [
        {
          title: "Tip Calculator",
          link: "https://mrrwmix.github.io/TipCalculator"
        },
        {
          title: "Source Code",
          link: "https://github.com/Mrrwmix/TipCalculator"
        }
      ]
    },
    {
      img: "./images/whathappened.png",
      anchor: [
        {
          title: "What Happened On...?",
          link: "https://mrrwmix.github.io/project1-ajgcmwmw"
        },
        {
          title: "Source Code",
          link: "https://github.com/Mrrwmix/project1-ajgcmwmw"
        }
      ]
    },
    {
      img: "./images/node.png",
      anchor: [
        { title: "LIRI Bot", link: "https://github.com/Mrrwmix/liri-node-app" },
        {
          title: "Bamazon (MySQL)",
          link: "https://github.com/Mrrwmix/Bamazon"
        },
        {
          title: "Word Guess",
          link: "https://github.com/Mrrwmix/Constructor-Word-Guess"
        },
        {
          title: "Friend Finder",
          link: "https://glacial-cove-40382.herokuapp.com/"
        }
      ]
    },
    {
      img: "./images/githubFinder.svg",
      anchor: [
        {
          title: "Github Finder (React)",
          link: "https://githubfinder-mrrwmix.netlify.com/"
        }
      ]
    },
    {
      img: "./images/discord.svg",
      anchor: [
        {
          title: "Discord Chat Bot",
          link: "https://github.com/Mrrwmix/BuddyGuyBot"
        }
      ]
    },
    {
      img: "./images/opinionated.png",
      anchor: [
        { title: "Opinionated", link: "https://p2-opinionated.herokuapp.com/" }
      ]
    },
    {
      img: "./images/contact.svg",
      anchor: [
        {
          title: "Contact Keeper (React)",
          link: "https://mysterious-refuge-41493.herokuapp.com/login"
        }
      ]
    },
    {
      img: "./images/prowler.png",
      anchor: [
        {
          title: "Web Prowler (Scraper)",
          link: "https://webprowler.herokuapp.com/"
        },
        { title: "Source Code", link: "https://github.com/Mrrwmix/WebProwler" }
      ]
    }
  ];
  return (
    <div className='col-md-12 bg-white p-0'>
      <h1
        className='text-center bg-dark text-light py-3 border-bottom'
        id='portfolio'
      >
        Portfolio
      </h1>
      <div className='d-flex justify-content-center flex-wrap'>
        {projects.map(project => (
          <div
            className='card float-left border border-dark m-2'
            style={{ width: "18rem" }}
            key={project.img.match(/(?<=\.\/images\/).*?(?=\.)/)}
            data-aos='fade-up'
          >
            <img
              src={project.img}
              className='card-img-top w-100'
              style={{ height: "10rem" }}
              alt={project.img.match(/(?<=\.\/images\/).*?(?=\.)/)}
            />
            <div className='card-body bg-info'>
              {project.anchor.map(indv => (
                <a
                  href={indv.link}
                  className='text-light'
                  target='_blank'
                  rel='noopener noreferrer'
                  key={indv.title
                    .split(" ")
                    .join("")
                    .toLowerCase()}
                >
                  <p className='card-text text-center'>{indv.title}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
