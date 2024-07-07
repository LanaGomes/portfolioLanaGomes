import Contact from "./Components/Contact";

import "./App.css";
import About from "./Components/About";
import Projects from "./Components/Projects";
import { useTranslation } from "react-i18next";
import "./i18n";
import euaIcon from "./images/euaIcon.png";
import brazIcon from "./images/brazilIcon.png";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <main className="mainContainer">
        <section className="containerFlagIcon">
          <div className="flagIcon" onClick={() => changeLanguage("en")}>
            <img alt="BandeiraDosEstadosUnidos" src={euaIcon} />
          </div>
          <div className="flagIcon" onClick={() => changeLanguage("pt")}>
            {" "}
            <img alt="BandeiraDoBrasil" src={brazIcon} />
          </div>
        </section>

        <div className="containerAboutContact">
          {" "}
          <section className="transparentContainer1 ">
            <About />
          </section>
          <section className="transparentContainer2  contactView700Contact">
            <Contact />
          </section>
        </div>

        <section className="transparentContainer3">
          <Projects />
        </section>
        <section className="transparentContainer2 contactView600Contact ">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
