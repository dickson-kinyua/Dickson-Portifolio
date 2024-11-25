import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
// import { Introduction } from "./components/Introduction";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Tools } from "./components/Tools";
import "./Tailwindcss/output.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-bgd  text-gray-500">
        <Header />
        <div className="px-6">
          <About />
          <Skills />
          <Tools />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </Router>
  );
}

export default App;
