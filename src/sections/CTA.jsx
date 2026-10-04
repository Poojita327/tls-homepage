import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";

const CTA = () => {
  return (
    <section className="cta-section" id="admissions">

      <div className="container">

        <Reveal>
          <div className="cta-box">

            <div>
              <span className="eyebrow">
                ADMISSIONS 2026–27
              </span>

              <h2>
                Give your child
                <br />
                <em>room to become.</em>
              </h2>

              <p>
                Discover the Tulas experience and take
                the first step toward joining our community.
              </p>
            </div>

            <a
              href="https://admission.tis.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              Apply Now
              <ArrowUpRight size={18} />
            </a>

          </div>
        </Reveal>

      </div>

    </section>
  );
};

export default CTA;