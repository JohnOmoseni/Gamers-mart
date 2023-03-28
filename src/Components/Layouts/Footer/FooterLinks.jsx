import React from "react";
import { Link } from "react-router-dom";

function FooterLinks() {
  return (
    <>
      <div className="even-columns">
        <h3 className="fw-bold">Customer Service</h3>
        <ul>
          <li>
            <a href="#">Payment Methods</a>
          </li>
          <li>
            <a href="#">Money-back guarantee</a>
          </li>
          <li>
            <a href="#">Shipping</a>
          </li>
          <li>
            <a href="#">Terms and Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="even-columns">
        <h3 className="fw-bold">Useful Links</h3>
        <ul>
          <li>
            <Link to="/about">About Gamersmart</Link>
          </li>
          <li>
            <a href="#">How To Shop</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <a href="#">Log In</a>
          </li>
        </ul>
      </div>
      <div className="even-columns">
        <h3 className="fw-bold">My Account</h3>
        <ul>
          <li>
            <a href="#">Sign In</a>
          </li>
          <li>
            <Link to="/cart">View Cart</Link>
          </li>
          <li>
            <a href="#">Wishlist</a>
          </li>
          <li>
            <a href="#">Track my Order</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default FooterLinks;
