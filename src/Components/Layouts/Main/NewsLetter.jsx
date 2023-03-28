import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function NewsLetter() {
  const form = useRef();
  const inputValue = useRef();

  const subscribe = e => {
    e.preventDefault();
    if (!inputValue.current) return;

    emailjs
      .sendForm("contact_id", "template_v2u3jr7", form.current, "7vZST2LG77Ar2RrNe")
      .then(result => {
        console.log(result.status);
        console.log("Sent Successfully");
      })
      .catch(err => {
        console.log("Error sending email", err);
      })
      .finally(() => {
        inputValue.current.value = "";
      });
  };

  return (
    <section className="news-letter full-width">
      <div className="container">
        <div className="news-letter-top">
          <h3 className="fw-bold">Join Our News-Letter</h3>
          <p className="fw-semi-bold">Subscribe to get information about products and coupons</p>
        </div>

        <form ref={form} onSubmit={subscribe} autoComplete="false">
          <input
            ref={inputValue}
            type="email"
            required
            name="user_email"
            placeholder="Enter your Email address"
          />
          <button type="submit">
            Subscribe <span></span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewsLetter;
