import React from "react";

function BlogCard({ img, title, comment, body, date }) {
  return (
    <div className="blog game-card">
      <div className="img-box">
        <img src={img} />
      </div>
      <div className="details">
        <h3>
          <span>{date}</span>
          <span className="comment">{comment}</span>
        </h3>
        <p className="title fw-semi-bold">{title}</p>
        <p className="blog-body">{body}</p>
      </div>
    </div>
  );
}

export default BlogCard;
