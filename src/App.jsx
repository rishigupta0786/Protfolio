import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  StarsCanvas,
} from "./components";
import Resume from "./components/Resume";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <StarsCanvas />
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Experience />
                  <Tech />
                  <Projects />
                  <Contact />
                </>
              }
            />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
