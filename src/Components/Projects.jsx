import githubIconBlue from "../images/githubLogoBlue.png";
import seeProjectLogo from "../images/seeProjectLogo.png";
import { projects } from "../Database";

function Projects() {
  return (
    <>
      <h1 id="h1Projects">Projetos</h1>
      <div className="wrapperProjects">
        {projects.map((project) => {
          return (
            <section key={project.id} className="cardProject">
              <img src={project.projectImg} />
              <div className="container">
                <h3>{project.projectName}</h3>
                <h2>{project.projectdescription}</h2>
                <h4>Tecnologias utilizadas</h4>
                <p>{project.technologiesUsed}</p>
              </div>
              <div className="projectIcons ">
                <a className="tooltip" target="blank" href={project.linkGithub}>
                  <span className="tooltiptext">código gitHub</span>
                  <img src={githubIconBlue}></img>
                </a>
                <a className="tooltip" target="blank">
                  <span className="tooltiptext">Ver projeto</span>
                  <a
                    className="tooltip"
                    target="blank"
                    href={project.linkProject}
                  >
                    {" "}
                    <img src={seeProjectLogo}></img>
                  </a>
                </a>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
export default Projects;
