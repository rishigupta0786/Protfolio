import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Resume from "./components/Resume";

const App = () => {
  return (
    <BrowserRouter>
      {/* StarsCanvas as background for entire app */}
      <div className="relative z-0 bg-primary">
        <StarsCanvas />
        <div className="relative z-10">
          <Navbar />
          <Routes>
            {/* Homepage route */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Experience />
                  <Tech />
                  <Works />
                  <Contact />
                </>
              }
            />

            {/* Resume page route */}
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
