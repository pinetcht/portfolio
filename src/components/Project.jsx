import "../styles/Root.css";
import github from "../assets/github.svg"
import web from "../assets/web.png"

export const Project = ({ name, desc, tech, pic, link, githubLink }) => {
    return (
        <>

            <div className="project" >
                <img className="projPic" src={pic} />
                <div className="projectDetails">
                    <h2 style={{ marginBottom: "0px" }}>{name}</h2>
                    <h4 style={{ marginTop: "5px", marginBottom: "5px", }}>{desc}</h4>
                    <p style={{ marginTop: "0px" }}><b>Tech Stacks: </b>{tech}</p>
                    <div className="icons">
                        <a href={githubLink} target="_blank" className="githubContainer">
                            <img src={github}></img>
                        </a>

                        {link &&
                            <a href={link} target="_blank" className="webContainer">
                                <img src={web} style={{ width: "auto", height: "2em" }}></img>
                            </a>
                        }


                    </div>

                </div>

            </div>


        </>
    )
};