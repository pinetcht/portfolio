import React, { useRef } from "react";
import  "../styles/Root.css";


export const Experience = ({company, date, role, location}) => {
    return (
        <>

        <div className="exp">
            <div className="expHeader">
            <h2 className="expHeader">{company}</h2>
            <h3 className="expHeader"> {date} </h3>
            </div>
            <div className="expHeader">
            <h3>{role}</h3>
            <h3>{location}</h3>
            </div>
            

        </div>

        </>
    )
};