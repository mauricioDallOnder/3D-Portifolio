import { BrowserRouter } from "react-router-dom";
import Stars from "../src/components/canvas/Stars";
import Home from "./components/Home";
import Navbar from "../src/components/Navbar";
import About from "../src/components/About";
import Educacao from "./components/Educacao";
import Works from "../src/components/Works";

import Contact from "../src/components/Contact";


function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Home />
          
        </div>
        <div className="relative z-0 ">
          <About idName={"about"} />
          <Educacao idName={"cursos"} />
          <Works idName={"work"} />
          <Contact idName={"contact"} />
          <Stars />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
