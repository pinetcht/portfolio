import React, { useRef } from "react";
import  "../styles/Root.css";
import mail from "../assets/mail_digital.png"


export const Project = ({name, desc, tech}) => {
    return (
        <>

        <div className="project">
        <img src={mail}/>
        <div className="projectDetails">
            <h2 style={{marginBottom:"0px"}}>{name}</h2>
            <h4 style={{marginTop:"5px", marginBottom:"5px",}}>{desc}</h4>
            <p style={{marginTop:"0px"}}><b>Tech Stacks: </b>{tech}</p> 
        </div> 
        
        </div>
        
        </>
    )
};