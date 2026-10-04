import Reveal from "../components/Reveal";

const Campus = () => {
  return (
    <section className="campus-section" id="campus">

      <div className="campus-image" />

      <div className="campus-overlay" />

      <div className="container campus-content">

        <Reveal>
          <span className="eyebrow light-text">
            03 — CAMPUS LIFE
          </span>

          <h2>
            Space to think.
            <br />
            Space to <em>become.</em>
          </h2>

          <p>
            From classrooms and laboratories to sports,
            arts and residential life, every part of campus
            is designed to encourage exploration.
          </p>

          <a href="#sports" className="button button-light">
            Explore Campus
          </a>
        </Reveal>

      </div>

    </section>
  );
};

export default Campus;