import React from "react";
import pic from "../assets/notion-face.png"
import "../styles/Root.css";

export const About = () => {
  return (
    <>

      <h1 className="header">about.</h1>

      <img src={pic} id="pic" style={{width: "20%"}}/>

      <p>
        I'm an aspiring software developer from
        Bangkok, Thailand. My journey started one fateful day when I took Intro to CS in my sophomore year. 
        I'm a dabbler at heart, and I dabbled my way to CS. I love exploring the many facets of computer science. 
      </p>

      <p>
        I discovered my love for programming when I was a linguistics research assistant helping
        to develop a Thai as a foreign language textbook. I programmed Python scripts to help parse a Thai dictionary file, classifying definitions and examples, and
        randomizing top frequently used sentences. I love using programming to solve problems and automate workflows.
      </p>

      <p>
        In Summer 2024, I joined the Launch program, which taught me web development and working in a technical team. 
        I learned invaluable skills such as JavaScript, React, Express.js, and Git. During the first three weeks of summer, I worked with
        3 teams creating 3 different web apps: a school administrator page, a Spotify social media, and a recipe sharing platform. Spending 8 hours coding
        only strengthened my interest in programming, and working with a dynamic team was a great experience.
      </p>

      <p>
        I spent the summer working at a startup called VinePair, developing an end-to-end full-stack website.
        I co-developed an ETL data pipeline from 3 different sources to calculate SEO trends and audeince insights, and created an interactive dashboard
        that dynamically filters alcohol types and time ranges. Some tech stacks I used were React, JavaScript, AmCharts, Python, Docker, and AWS.
        
      </p>
    </>
  );
};
