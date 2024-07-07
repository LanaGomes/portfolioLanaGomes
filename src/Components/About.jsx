import profilePic from "../images/profilePic.jpeg";
import gitHubPic from "../images/gitHubICon.png";
import externalLinkIcon from "../images/externalLinkIcon.png";
import instaIcon from "../images/InstaIcon.png";
import linkedinIcon from "../images/linkedinIcon.png";
import pdfCurriculum from "../images/curriculum.pdf";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <div className="wrapperAbout">
      <img id="profilePic" src={profilePic} />
      <div className="wrapperTextsAbout">
        <h1>Lana Gomes</h1>
        <h2>{t("desenvolvimento_Web")}</h2>
      </div>

      <div className="IconsAbout">
        <a
          className="tooltip"
          target="blank"
          href="https://www.instagram.com/lanahermana/"
        >
          <span className="tooltiptext">Instagram</span>
          <img alt="InstagramIcon" src={instaIcon}></img>
        </a>
        <a
          className="tooltip"
          target="blank"
          href="https://www.linkedin.com/in/lana-gomes-b622981ab/"
        >
          <span className="tooltiptext">Linkedin</span>
          <img alt="linkedinIcon" src={linkedinIcon}></img>
        </a>
        <a
          className="tooltip"
          target="blank"
          href="https://github.com/LanaGomes"
        >
          <span className="tooltiptext">gitHub</span>
          <img alt="GitHub" src={gitHubPic}></img>
        </a>
        <a className="tooltip" target="blank" href={pdfCurriculum}>
          <span className="tooltiptext">{t("currículo")}</span>
          <img alt="CurriculumLink" src={externalLinkIcon}></img>
        </a>
      </div>
      <p>lana.gomes1919@gmail.com</p>
    </div>
  );
}
export default About;
