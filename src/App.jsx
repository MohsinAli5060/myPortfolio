import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import  Contact  from "./components/Contact";
import Services from "./components/Services";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        {/* Homepage: Hero + About + Skills + 3 Projects */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <Services/>
              <Projects showAll={false} /> {/* Only 3 projects */}
              <Contact/>
            </>
          }
        />

        {/* Individual Routes (optional) */}
      
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path='/services' element={<Services/>}/>
        {/* Projects Page: Show all projects */}
        <Route path="/projects" element={<Projects showAll={true} />} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
