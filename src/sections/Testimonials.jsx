import { Quote } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const testimonials = [
  {
    quote:
      "We feel supported in what we do and nudged further to do more. Tulas brings out the best in every student.",
    name: "Urja Bhayani",
    role: "Parent",
  },
  {
    quote:
      "The teachers are passionate and helpful towards academics. The personal attention makes a real difference.",
    name: "Amit Agrawal",
    role: "Parent",
  },
  {
    quote:
      "The boarding and infrastructure facilities have helped my child become more confident and independent.",
    name: "Gulabdas Gupta",
    role: "Parent",
  },
];

const Testimonials = () => {
  return (
    <section className="section testimonials-section" id="stories">

      <div className="container">

        <Reveal>
          <SectionHeading
            eyebrow="05 — PARENT STORIES"
            title="What the Tulas community says."
          />
        </Reveal>

        <div className="testimonial-grid">

          {testimonials.map((item, index) => (
            <Reveal
              key={item.name}
              delay={index * 0.1}
            >
              <article className="testimonial-card">

                <Quote
                  size={30}
                  strokeWidth={1.4}
                />

                <p>“{item.quote}”</p>

                <div className="testimonial-author">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>

              </article>
            </Reveal>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;