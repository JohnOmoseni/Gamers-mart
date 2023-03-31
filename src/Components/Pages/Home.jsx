import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Main from "../Layouts/Main/Main";

const homeVariant = {
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
  exit: {
    opacity: 0,
    x: window.innerWidth,
    transition: { duration: 0.4 },
  },
};

function Home() {
  const homeRef = useRef();

  useEffect(() => {
    if (homeRef.current) homeRef.current.scrollIntoView();
  }, []);
  return (
    <motion.div ref={homeRef} variants={homeVariant} initial="hidden" animate="animate" exit="exit">
      <Main />
    </motion.div>
  );
}

export default Home;
