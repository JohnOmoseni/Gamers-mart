import React from "react";
import BlogCard from "./BlogCard";
import BlogStories from "/src/Blog";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

function Blogs() {
  const blogSlice = BlogStories;

  return (
    <section id="blogs">
      <div className="heading">
        <h2 className="fw-bold">From Our Blog</h2>
        <p className="fs-small fw-semi-bold">
          View more Products <span></span>
        </p>
      </div>
      <div className="blogs-content">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3000,
          }}
          speed={800}
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            800: {
              slidesPerView: 3,
            },
            500: {
              slidesPerView: 2,
            },
          }}
          loop
          className="blog-swiper"
        >
          {blogSlice.map(item => {
            return (
              <SwiperSlide key={item.id}>
                <BlogCard {...item} />
              </SwiperSlide>
            );
          })}
          {/* </div> */}
        </Swiper>
      </div>
    </section>
  );
}

export default Blogs;
