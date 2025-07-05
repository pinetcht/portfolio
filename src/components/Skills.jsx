import React from 'react'
import { Skill } from '../components/Skill.jsx'
import react from "../assets/react.svg"
import python from "../assets/python.svg"
import git from "../assets/git.svg"
import javascript from "../assets/javascript.svg"
import docker from "../assets/docker.svg"
import firebase from "../assets/firebase.svg"
import nodedotjs from "../assets/nodedotjs.svg"
import figma from "../assets/figma.svg"
import express from "../assets/express.svg"
import mysql from "../assets/mysql.svg"
import java from "../assets/java.svg"
import aws from  "../assets/aws.svg"
import "../styles/Skill.css"

const Skills = () => {
    return (
        <>
            <div className="skillsContainer">
                <Skill img={react} name="React" color="invert(72%) sepia(25%) saturate(1070%) hue-rotate(162deg) brightness(104%) contrast(97%)"/>
                <Skill img={python} name="Python" color="invert(43%) sepia(7%) saturate(4317%) hue-rotate(166deg) brightness(94%) contrast(81%)" />
                <Skill img={mysql} name="MySQL" color="invert(41%) sepia(90%) saturate(283%) hue-rotate(162deg) brightness(89%) contrast(89%)"/>
                <Skill img={javascript} name="JavaScript" color="invert(95%) sepia(33%) saturate(4817%) hue-rotate(338deg) brightness(101%) contrast(94%)"/>
                <Skill img={express} name="Express" color="invert(0%) sepia(98%) saturate(0%) hue-rotate(317deg) brightness(101%) contrast(101%)"/>
                <Skill img={git} name="Git" color="invert(36%) sepia(68%) saturate(2721%) hue-rotate(345deg) brightness(101%) contrast(88%)"/>
                <Skill img={docker} name="Docker" color="invert(45%) sepia(84%) saturate(767%) hue-rotate(175deg) brightness(95%) contrast(95%)"/>
                <Skill img={nodedotjs} name="Node.js" color="invert(59%) sepia(8%) saturate(2451%) hue-rotate(62deg) brightness(94%) contrast(85%)"/>
                <Skill img={firebase} name="Firebase" color="invert(48%) sepia(100%) saturate(7347%) hue-rotate(14deg) brightness(95%) contrast(102%)"/>
                <Skill img={figma} name="Figma" color="invert(54%) sepia(92%) saturate(4938%) hue-rotate(349deg) brightness(96%) contrast(97%)"/>
                <Skill img={java} name="Java" />
                <Skill img={aws} name="AWS" />
            </div>
        </>
    )
}

export default Skills