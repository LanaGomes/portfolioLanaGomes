import Contact from "./Components/Contact";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <main className="mainContainer">
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
