import React from "react";
import pic from "../assets/notion-face.png"
import "../styles/Root.css";

export const About = () => {
  return (
    <>

      <h1 className="header">about.</h1>
      <div className="aboutContainer">
        <img src={pic} id="pic" style={{ width: "20%" }} />
        <div className="paragraphs">

          <p>
            I'm an aspiring software developer from
            Bangkok, Thailand. A curious dabbler at heart, I love exploring the many facets of computer science.
          </p>

          <p>
            I started off as a Linguistics major, but discovered my love for programming when I was a textbook research assistant.
            I programmed Python scripts to help parse and clean a Thai dictionary file and
            randomizing top frequently used sentences. I love using programming to solve problems and automate workflows.
          </p>

          {/* <p>
        In Summer 2024, I joined the Launch program, which taught me web development and working in a technical team. 
        I learned invaluable skills such as JavaScript, React, Express.js, and Git. During the first three weeks of summer, I worked with
        3 teams creating 3 different web apps: a school administrator page, a Spotify social media, and a recipe sharing platform. Spending 8 hours coding
        only strengthened my interest in programming, and working with a dynamic team was a great experience.
      </p> */}

          <p>
            I spent the summer working at a startup called VinePair, developing an end-to-end full-stack website.
            I co-developed an ETL data pipeline from 3 different sources to calculate SEO trends and audeince insights, and created an interactive dashboard
            that dynamically filters alcohol types and time ranges.
          </p>
        </div>

      </div>


    </>
  );
};
