import React from "react";
import { Link } from "react-router-dom";
import { BiHomeHeart } from "react-icons/bi";

function BrowseProducts() {
  return (
    <div className="browse-categories">
      <h3 className="fw-semi-bold">
        <BiHomeHeart />
        Browse Categories
      </h3>

      <ul role="list">
        <li>
          <Link to="#">PlayStation</Link>
        </li>
        <li>
          <Link to="#">XBOX</Link>
        </li>
        <li>
          <Link to="#">Nintendo</Link>
        </li>
        <li>
          <Link to="#">Phones and Tablets</Link>
        </li>
        <li>
          <Link to="#">Pre-Owned</Link>
        </li>
        <li>
          <Link to="#">Deals</Link>
        </li>
        <li>
          <Link to="#">Coming Soon</Link>
        </li>
        <li>
          <Link to="#">Accessories</Link>
        </li>
      </ul>
    </div>
  );
}

export default BrowseProducts;
