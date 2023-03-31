import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cardAboutDetails } from "../../constants";
import aboutUs from "/Assets/Images/aboutus.jpg";

const aboutVariant = {
  hidden: {
    opacity: 0,
    x: -window.innerWidth,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
  exit: {
    opacity: 0,
    x: window.innerWidth,
    transition: { duration: 0.4 },
  },
};

const Card = ({ title, icon: Icon, subtitle }) => {
  return (
    <div className="experience card">
      <span className="icon">
        <Icon size="30" />
      </span>
      <h3>{title}</h3>
      <span>{subtitle}</span>
    </div>
  );
};

function About() {
  const aboutRef = useRef();

  useEffect(() => {
    if (aboutRef.current) aboutRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <motion.div
      ref={aboutRef}
      className="about-page"
      variants={aboutVariant}
      initial="hidden"
      animate="animate"
      exit="exit"
    >
      <h2 className="fw-bold">
        Gamers<span>mart</span>
      </h2>
      <div className="content">
        <div className="even-column img-box">
          <img src={aboutUs} />
        </div>
        <div className="even-column column2">
          <div className="card-container">
            {cardAboutDetails.map((card, idx) => (
              <Card key={idx} {...card} />
            ))}
          </div>
          <p className="about-us">
            Welcome to GamersMart, your number one source for all games and accessories. We are
            dedicated to providing you with an exceptional shopping experience. Our team is
            passionate about bringing you the best game products from around the world, at
            affordable prices.
          </p>
          <Link to="/contact-us" className="btn">
            <button className="lets-talk">Let's Talk</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
