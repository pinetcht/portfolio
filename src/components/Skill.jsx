import React, { useRef } from "react";
import  "../styles/Skill.css";


export const Skill = ({img, name, color}) => {
    return (
        <>

        <div className="skill">
            <img src={img} className="icon" style={{filter: color}}></img>
            {name}
        </div>

        </>
    )
};