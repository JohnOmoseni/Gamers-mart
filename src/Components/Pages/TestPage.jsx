import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1 },
  animate: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 2 } },
};

const textVariant = {
  hidden: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const hoverVariant = {
  hidden: {},
  animate: {},
};

function TestPage() {
  const word = "Recreating a Text Hover Effect with React and Framer-Motion";
  console.log(word.split(" "));

  return (
    <div className="test-container">
      <motion.div
        className="flex-container"
        variants={container}
        initial="hidden"
        animate="animate"
      >
        {word.split(" ").map((letter, idx) => (
          <motion.span variants={textVariant} key={idx} style={{ marginRight: "10px" }}>
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

export default TestPage;
