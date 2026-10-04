import {
  Brain,
  Lightbulb,
  FlaskConical,
  Globe2,
} from "lucide-react";

import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const programs = [
  {
    icon: Brain,
    number: "01",
    title: "Academic Excellence",
    text: "A CBSE-aligned learning environment built around reasoning, analytical thinking and strong fundamentals.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Experiential Learning",
    text: "Projects, seminars, educational journeys and activities that connect classroom learning with the real world.",
  },
  {
    icon: FlaskConical,
    number: "03",
    title: "Future Ready",
    text: "Technology-enabled classrooms, digital learning and opportunities that prepare students for tomorrow.",
  },
  {
    icon: Globe2,
    number: "04",
    title: "Global Outlook",
    text: "Students develop communication, leadership and collaboration skills needed to thrive beyond the classroom.",
  },
];

const Academics = () => {
  return (
    <section className="section academics-section" id="academics">

      <div className="container">

        <Reveal>
          <SectionHeading
            eyebrow="02 — ACADEMICS"
            title="Learning designed for the world ahead."
            description="TIS follows a CBSE curriculum that prioritizes analytical thinking, creativity and practical learning."
          />
        </Reveal>

        <div className="program-grid">

          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <Reveal key={program.number} delay={index * 0.08}>
                <article className="program-card">

                  <div className="program-top">
                    <span>{program.number}</span>
                    <Icon size={25} strokeWidth={1.5} />
                  </div>

                  <h3>{program.title}</h3>

                  <p>{program.text}</p>

                  <span className="card-line" />

                </article>
              </Reveal>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Academics;