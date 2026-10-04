import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const About = () => {
  return (
    <section className="section about-section" id="about">

      <div className="container">

        <Reveal>
          <SectionHeading
            eyebrow="01 — OUR PHILOSOPHY"
            title="More than a school. A place to belong, grow and shine."
            description="Tulas International School combines the values of a traditional gurukul with modern education, technology and opportunities."
          />
        </Reveal>

        <div className="about-grid">

          <Reveal direction="left">
            <div className="about-image">
              <img
                src="/images/campus.jpg"
                alt="Tulas International School campus"
              />

              <div className="image-label">
                THE MODERN GURUKUL
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="about-copy">

              <p className="large-text">
                Education should not only prepare a student
                for an examination. It should prepare them
                for life.
              </p>

              <p>
                At Tulas, students are encouraged to question,
                experiment, compete, collaborate and discover
                what they are capable of becoming.
              </p>

              <a
                href="#academics"
                className="text-link"
              >
                Discover our approach
                <ArrowUpRight size={17} />
              </a>

            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};

export default About;