import "../styles/Root.css";
import github from "../assets/Github.png"

export const Project = ({ name, desc, tech, pic, link, githubLink }) => {
    return (
        <>

            <div className="project" >
                <a href={link} target="_blank">
                    <img className="projPic" src={pic} />
                </a>
                <div className="projectDetails">
                    <h2 style={{ marginBottom: "0px" }}>{name}</h2>
                    <h4 style={{ marginTop: "5px", marginBottom: "5px", }}>{desc}</h4>
                    <p style={{ marginTop: "0px" }}><b>Tech Stacks: </b>{tech}</p>
                    <a href={githubLink} target="_blank" className="githubContainer">
                        <img src={github}></img>
                    </a>
                </div>

            </div>


        </>
    )
};