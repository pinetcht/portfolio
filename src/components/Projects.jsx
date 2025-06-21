import React from 'react'
import { Project } from "../components/Project.jsx"
import harmony from "../assets/harmony.png"
import ratemysongs from "../assets/ratemysongs.png"
import nlp from "../assets/nlp.png"
import tastetopia from "../assets/tastetopia.png"
import playlist from "../assets/p-laylist.png"
import housing47 from "../assets/housing47.png"

const Projects = () => {
    return (
        <>
            <Project name={"Housing47"}
                desc="A user-friendly housing selection platform for a visual and stress-free room draw experience"
                tech="React.js, Maptiler, Express.js, Firebase"
                pic={housing47}
                link="https://housing47.netlify.app/"
                githubLink="https://github.com/pinetcht/housing47" />
            <Project name={"Harmony: A Spotify Social Media App"}
                desc="A music social media platform for personal Spotify profiles, forums, and DMs"
                tech="Spotify API, React.js, Express.js, Firebase"
                pic={harmony}
                githubLink="https://github.com/pinetcht/Harmony" />
            <Project name={"Rate My Songs"}
                desc="Android social app to rate songs based on genres"
                tech="Kotlin, Jetpack Compose, Firebase"
                pic={ratemysongs}
                githubLink="https://github.com/pinetcht/RateMySongs"
            />
            <Project name={"Character-Based Text Generation and Classification"}
                desc="A bigram text generator to simulate dialogue styles of three movie characters."
                tech="NLP, Machine Learning, Java,Python"
                pic={nlp}
                githubLink="https://github.com/pinetcht/CharacterBasedTextGeneration" />
            <Project name={"Tastetopia"}
                desc="A recipe sharing platform with user and admin features and an AI chatbot assistant"
                tech="OpenAI API, React.js, Express.js Firebase"
                pic={tastetopia}
                githubLink="https://github.com/pinetcht/Tastetopia" />
            <Project name={"P-laylist"}
                desc="Personalized, no-repeats song recommendation based on your music tastes "
                tech="Docker Compose, Nginx, Flask, Python"
                pic={playlist}
                githubLink="https://github.com/pinetcht/p-laylist" />

        </>
    )
}

export default Projects