import React, { useRef } from "react";
import "../styles/Root.css";


export const Experience = ({ company, date, role, location }) => {
    return (
        <>

            <div className="exp">
                <div className="expHeader">
                    <h2 className="role expDetail">{role}</h2>
                    <h3 className="company expDetail">{company}</h3>
                </div>
                <div className="expHeader right">

                    <h3 className="expDetail"> {date} </h3>
                    <h3 className="expDetail">{location}</h3>
                </div>


            </div>

        </>
    )
};