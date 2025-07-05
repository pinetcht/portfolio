import React from "react";
import pic from "../assets/notion-face.png"
import "../styles/Root.css";
import linkedin from "../assets/LinkedIn.png"
import github from "../assets/github.svg"
import email from "../assets/email.png"

export const About = () => {
  return (
    <>

      <h1 className="header">about.</h1>
      <div className="aboutContainer">
        <div className="paragraphs">

          <p>
            I'm an aspiring software developer from
            Bangkok, Thailand.
          </p>

          <p>
            I started off as a Linguistics major, but discovered my love for programming when I was a textbook research assistant.
            I programmed Python scripts to help parse and clean a Thai dictionary file and
            randomizing top frequently used sentences. I love using programming to solve problems and automate workflows.
          </p>

          <p>
            I spent the summer working at a startup called VinePair, developing an end-to-end full-stack website.
            I co-developed an ETL data pipeline from 3 different sources to calculate SEO trends and audeince insights, and created an interactive dashboard
            that dynamically filters alcohol types and time ranges.
          </p>

          <p>
            Freshly graduated from Pomona College with a CS and linguistics degree, I'm ready for my next adventure! Currently looking for full-stack opportunities, 
            where I can collaborate on user-focused apps and make big and small changes in a user's experience. 
          </p>
        </div>

        <div className="contactsBottom">
          <a href="https://www.linkedin.com/in/pinenet/" target="_blank" className="contactContainer">
            <img src={linkedin}>
            </img>
          </a>
          <a href="https://github.com/pinetcht" target="_blank" className="contactContainer">
            <img src={github} style={{ width: "3em" }}>
            </img></a>

          <a href="mailto:teechutha.net@gmail.com" target="_blank" className="contactContainer">
            <img src={email} >
            </img>
          </a>


        </div>



      </div>


    </>
  );
};
