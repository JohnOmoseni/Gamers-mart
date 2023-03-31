import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Img1 from "../../Assets/visa2.png";
import Img2 from "../../Assets/paypal.png";
import Img3 from "../../Assets/mastercard.png";
import Img4 from "../../Assets/Americanexpress.png";

import styles from "/sass/pages/payment.module.scss";

const paymentVariant = {
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

const input = {
  cardNumber: "",
  expiry: "",
  cvc: "",
};
const paymentMethodsImages = [Img1, Img2, Img3, Img4];

function PaymentPage() {
  const [inputValues, setInputValues] = useState(input);
  const paymentRef = useRef();

  useEffect(() => {
    if (paymentRef.current) paymentRef.current.scrollIntoView();
  }, []);

  const handleInputChange = e => {
    const inputName = e.target.name;

    setInputValues({ [inputName]: e.target.value });
  };
  const handleFormSubmit = e => {
    e.preventDefault();

    alert("Thanks for shopping with us");
  };

  return (
    <motion.div
      className={styles.paymentTab}
      ref={paymentRef}
      variants={paymentVariant}
      initial="hidden"
      animate="animate"
      exit="exit"
    >
      <div className={styles.paymentForm}>
        <h2 className={styles.fwBold}>Payment Information</h2>

        <form method="POST" onSubmit={handleFormSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="card-number">Card Number</label>
            <input
              type="tel"
              name="card-number"
              placeholder="Credit Card Number"
              required
              value={inputValues.cardNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="expiry">Expiry</label>
            <input
              type="text"
              name="expiry"
              placeholder="DD/MM/YY"
              required
              value={inputValues.expiry}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="cvc">CVC</label>
            <input
              type="text"
              name="cvc"
              placeholder="CVC"
              required
              value={inputValues.cvc}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className={`${styles.btn} purchase-btn`}>
            Purchase
          </button>
        </form>

        <div className={styles.paymentMethodIcons}>
          {paymentMethodsImages.map((img, idx) => (
            <div key={idx}>
              <img src={img} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default PaymentPage;
