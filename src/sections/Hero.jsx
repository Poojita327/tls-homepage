import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-image" />

      <div className="hero-overlay" />

      <div className="hero-content">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-eyebrow"
        >
          DEHRADUN · UTTARAKHAND · INDIA
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
        >
          Where curiosity
          <br />
          <em>becomes possibility.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
        >
          A modern gurukul where academic excellence,
          character and exploration come together.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.45,
          }}
        >
          <a href="#admissions" className="button button-primary">
            Explore Admissions
            <ArrowUpRight size={18} />
          </a>

          <a href="#about" className="button button-outline">
            Discover Tulas
          </a>
        </motion.div>

      </div>

      <div className="hero-bottom">

        <div>
          <strong>EST. 2012</strong>
          <span>Rishabh Educational Trust</span>
        </div>

        <a href="#about" className="scroll-indicator">
          <span>Scroll to explore</span>
          <ArrowDown size={17} />
        </a>

      </div>
    </section>
  );
};

export default Hero;