import React from 'react'
import { Navbar } from "../components/Navbar.jsx"
import { Project } from "../components/Project.jsx"
import { About } from "../components/About.jsx"
import { Experience } from "../components/Experience.jsx"
import mail from "../assets/mail_digital.png"
import styles from "../styles/Navigation.module.css";

import "../styles/Root.css";


export const Root = () => {
  return (
    <>
    <Navbar />
      <div className="page">
        
        <div className="intro">
        <img src={mail}></img>
          <h1 style={{marginTop:"0px"}}>Pine Netcharussaeng's Portfolio</h1>
          <p>Welcome to Pine's Webpage!</p>
        </div>
        <div className="blocks">
          <h1>Projects</h1>
            <Project name={"Harmony: A Spotify Social Media App"}
            desc="A music social media platform for personal Spotify profiles, forums, and DMs"
            tech="Spotify API, React.js, Express.js, Firebase"/>
            <Project name={"Rate My Songs"}
            desc="Android social app to rate songs based on genres"
            tech="Kotlin, Jetpack Compose, Firebase"/>
            <Project name={"Character-Based Text Generation and Classification"}
            desc="A bigram text generator to simulate dialogue styles of three movie characters."
            tech="NLP, Machine Learning, Java,Python"/>
        </div>
        <div className="blocks">
          <h1 >Experience</h1>
          <Experience company ="Pomona College" date="September 2025 - Present" role="CS51 TA"  location={"Claremont, CA"}/>
            <Experience company ="VinePair" date="June 2024 - August 2024"
             role="Software Developer Intern" location={"New York, New York"}
             desc="Data pipeline + Interactive Dashboard "/>
            <Experience company ="Chulalongkorn University" date="May 2023 - August 2023" role="Research Intern"  location={"Bangkok, Thailand"}/>
        </div>
        <div className="blocks">
          <h1 >Skills</h1>
        </div>
        <div className="blocks">
            <About />
        </div>
       
      </div>
  </>
  )
}
