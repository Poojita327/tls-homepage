import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const sports = [
    {
        name: "Football",
        image: "/images/football.png",
    },
    {
        name: "Swimming",
        image: "/images/swimming.png",
    },
    {
        name: "Horse Riding",
        image: "/images/horse-riding.png",
    },
    {
        name: "Cycling",
        image: "/images/cycling.png",
    },
];

const Sports = () => {
  return (
    <section className="section sports-section" id="sports">

      <div className="container">

        <Reveal>
          <SectionHeading
            eyebrow="04 — BEYOND ACADEMICS"
            title="Discipline. Energy. Play."
            description="With 16+ sports and extensive facilities, students discover that growth doesn't stop when the bell rings."
          />
        </Reveal>

        <div className="sports-grid">

          {sports.map((sport, index) => (
            <Reveal
              key={sport.name}
              delay={index * 0.08}
            >
              <article className="sport-card">

                <img
                  src={sport.image}
                  alt={sport.name}
                />

                <div className="sport-overlay" />

                <div className="sport-content">
                  <span>0{index + 1}</span>

                  <h3>{sport.name}</h3>

                  <ArrowUpRight size={21} />
                </div>

              </article>
            </Reveal>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Sports;