import githubIconBlue from "../images/githubLogoBlue.png";
import seeProjectLogo from "../images/seeProjectLogo.png";
import { projects } from "../Database";
import { useTranslation } from "react-i18next";
import seta from "../images/triangulo.png";
function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <h1 id="h1Projects">{t("projetos")}</h1>
      <div className="wrapperProjects">
        {projects.map((project) => {
          return (
            <section key={project.id} className="cardProject">
              <img className="cardProjectImage" src={project.projectImg} />

              <div className="cardProjectContent">
                <h3>{t(project.projectName)}</h3>
                <h2>{t(project.projectdescription)}</h2>

                <p>{project.technologiesUsed}</p>
              </div>
              <div className="projectIcons ">
                <a className="tooltip" target="blank" href={project.linkGithub}>
                  <span className="tooltiptext">{t("código gitHub")}</span>
                  <img src={githubIconBlue}></img>
                </a>
                <div className="tooltip" target="blank">
                  <span className="tooltiptext">{t("Ver projeto")}</span>
                  <a
                    className="tooltip"
                    target="blank"
                    href={project.linkProject}
                  >
                    {" "}
                    <img id="targetSection" src={seeProjectLogo}></img>
                  </a>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
export default Projects;
