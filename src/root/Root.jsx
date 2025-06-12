import React from 'react'
import { useState } from 'react'
import { Navbar } from "../components/Navbar.jsx"
import { Project } from "../components/Project.jsx"
import { About } from "../components/About.jsx"
import { Experience } from "../components/Experience.jsx"
import mail from "../assets/mail_digital.png"
import name from "../assets/name_dropdown.png"
import portrait from "../assets/portrait.png"
import styles from "../styles/Navigation.module.css";
import Dropdown from "../components/Dropdown.jsx"


import "../styles/Root.css";


export const Root = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const titles = [
    { value: 'softwareDev', label: 'software developer' },
    { value: 'problemSolver', label: 'problem solver' },
    { value: 'learner', label: 'curious learner' },
    { value: 'optimizer', label: 'optimizer' },
  ];

  const handleSelect = (selectedOption) => {
    console.log('Selected:', selectedOption);
    setSelectedOption(selectedOption.value)
  };




  return (
    <>
      <Navbar />
      <div className="page">

        <div className="intro">
          {/* <img src={mail}></img> */}
          <div className="description">
            <div className="title">
              <h1 style={{ fontSize: "3rem" }}>Hi, I am Pine,  {selectedOption === 'optimizer' ? 'an' : 'a'} </h1>
              <Dropdown options={ titles } onSelect={ handleSelect }></Dropdown>

            </div>



            <p className='heebo-regular' style={{ letterSpacing: "1px" }}>I’m a software developer driven by a passion to create user-focused and efficient technology solutions. I’m a curious
              problem solver who values life long learning. I’m excited to
              leverage my technical experience to solve real-world problems!</p>

            <div className="resumeBox">
              Download Resume
            </div>


          </div>
          <div className="pictureBox">
            <img className="portrait" src={portrait}></img>
          </div>
        </div>

        <div className="blocks">
          <section id="projects">
            <h1>projects.</h1>
            <Project name={"Harmony: A Spotify Social Media App"}
              desc="A music social media platform for personal Spotify profiles, forums, and DMs"
              tech="Spotify API, React.js, Express.js, Firebase" />
            <Project name={"Rate My Songs"}
              desc="Android social app to rate songs based on genres"
              tech="Kotlin, Jetpack Compose, Firebase" />
            <Project name={"Character-Based Text Generation and Classification"}
              desc="A bigram text generator to simulate dialogue styles of three movie characters."
              tech="NLP, Machine Learning, Java,Python" />
            <Project name={"Tastetopia"}
              desc="A recipe sharing platform with user and admin features and an AI chatbot assistant"
              tech="OpenAI API, React.js, Express.js Firebase" />

          </section>

        </div>
        <div className="blocks">
          <section id="experience">
            <h1 >experience.</h1>
            <Experience company="Pomona College" date="September 2025 - Present" role="CS51 TA" location={"Claremont, CA"} />
            <Experience company="VinePair" date="June 2024 - August 2024"
              role="Software Developer Intern" location={"New York, New York"}
              desc="Data pipeline + Interactive Dashboard " />
            <Experience company="Chulalongkorn University" date="May 2023 - August 2023" role="Research Intern" location={"Bangkok, Thailand"} />
          </section>
        </div>

        <div className="blocks">
          <section id="skills">
            <h1>skills.</h1>
          </section>

        </div>

        <div className="blocks">
          <About />
        </div>

      </div>
    </>
  )
}
