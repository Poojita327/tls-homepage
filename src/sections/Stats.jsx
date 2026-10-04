import { stats } from "../data/schoolData";
import Reveal from "../components/Reveal";

const Stats = () => {
  return (
    <section className="stats-section">

      <div className="container">

        <div className="stats-grid">

          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.08}
            >
              <div className="stat-card">

                <div className="stat-number">
                  {stat.value}
                  <span>{stat.suffix}</span>
                </div>

                <div className="stat-label">
                  {stat.label}
                </div>

              </div>
            </Reveal>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Stats;