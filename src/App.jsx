import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Academics from "./sections/Academics";
import Campus from "./sections/Campus";
import Stats from "./sections/Stats";
import Sports from "./sections/Sports";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";

const App = () => {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Academics />
        <Campus />
        <Stats />
        <Sports />
        <Testimonials />
        <CTA />
      </main>

      <footer className="footer">

        <div className="container footer-grid">

          <div>
            <div className="logo footer-logo">
              <span className="logo-mark">T</span>

              <span className="logo-text">
                TULAS
                <small>INTERNATIONAL SCHOOL</small>
              </span>
            </div>

            <p>
              A modern gurukul for curious,
              confident and compassionate learners.
            </p>
          </div>

          <div>
            <span className="footer-heading">
              Explore
            </span>

            <a href="#about">About</a>
            <a href="#academics">Academics</a>
            <a href="#campus">Campus Life</a>
            <a href="#sports">Sports</a>
          </div>

          <div>
            <span className="footer-heading">
              Contact
            </span>

            <span>Dhoolkot, P.O. Selaqui</span>
            <span>Chakrata Road, Dehradun</span>
            <span>Uttarakhand – 248011</span>
            <span>+91 98379 83791</span>
          </div>

        </div>

        <div className="footer-bottom container">
          <span>
            © 2026 Tulas International School
          </span>

          <span>
            Designed with purpose.
          </span>
        </div>

      </footer>
    </>
  );
};

export default App;