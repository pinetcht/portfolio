import React from 'react'
import { useState } from 'react'
import { Navbar } from "../components/Navbar.jsx"
import Projects from "../components/Projects.jsx"
import { About } from "../components/About.jsx"
import Experiences from "../components/Experiences.jsx"
import Skills from "../components/Skills.jsx"

import portrait from "../assets/portrait.png"
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
      <div className="intro">
        <div className="description">
          <div className="title">
            <h1>Hi, I am Pine,  {selectedOption === 'optimizer' ? 'an' : 'a'} </h1>
            <Dropdown options={titles} onSelect={handleSelect}></Dropdown>

          </div>



          <p className='heebo-regular paragraph' style={{ letterSpacing: "1px" }}>
            I’m a software developer driven by a passion to create
            user-focused and efficient technology solutions. I’m excited to
            leverage my technical experience to solve real-world problems!</p>

          <a href="https://drive.google.com/file/d/1W-6RQx7DA2J78qCnW4SHaerJlY7xm9hT/view?usp=sharing" className="resumeBox" download target="_blank">
            <div>
              Download Resume
            </div>
          </a>


        </div>
        <div className="pictureBox">
          <img className="portrait" src={portrait}></img>
        </div>
      </div>

      <div className="blocks pink">
        <section id="projects">
          <h1>projects.</h1>
          <Projects />
        </section>

      </div>
      <div className="blocks">
        <section id="experience">
          <h1 >experience.</h1>
          <Experiences />
        </section>
      </div>

      <div className="blocks pink">
        <section id="skills">
          <h1>skills.</h1>
          <Skills />

        </section>

      </div>

      <div className="blocks about">
        <About />
      </div>
    </>
  )
}
