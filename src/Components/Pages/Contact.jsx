import { useState, useRef } from "react";
import contactus from "/Assets/Images/contact-us.png";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const contactVariant = {
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

function Contact() {
  const [inputValues, setInputValues] = useState({ user_name: "", user_email: "", message: "" });
  const form = useRef();

  const handleInputChange = e => {
    const value = e.target.value;
    setInputValues(prev => ({ ...prev, [e.target.name]: value }));
  };

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm("contact_id", "template_v2u3jr7", form.current, "7vZST2LG77Ar2RrNe").then(
      result => {
        console.log("message sent");
      },
      error => {
        console.log(error.text);
      }
    );
    alert("Message sent");
  };

  return (
    <motion.div
      className="contact-page"
      variants={contactVariant}
      initial="hidden"
      animate="animate"
      exit="exit"
    >
      <h2 className="fw-bold">Get In Touch</h2>
      <div className="content">
        <div className="even-column img-box">
          <img src={contactus} alt="" />
        </div>
        <form ref={form} className="even-column" onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            required
            value={inputValues.user_name}
            placeholder="Your full name"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="user_email"
            required
            value={inputValues.user_email}
            placeholder="Email"
            onChange={handleInputChange}
          />
          <textarea
            rows="10"
            name="message"
            required
            value={inputValues.message}
            type="text"
            placeholder="Your message"
            onChange={handleInputChange}
          />
          <button type="submit" className="send">
            Send message
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
