import React, { useRef, useState } from "react";
import useShopContext from "../../../Context/ShopContext";
import GameCard from "./GameCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/effect-fade";

function ComingSoon() {
  const { products } = useShopContext();
  const carouselSlice = products.slice(18, 24);
  const gridSlice = products.slice(24, 35);

  const swiperNavNext = useRef();
  const swiperNavPrev = useRef();

  return (
    <section id="coming_soon">
      <div className="heading">
        <h2 className="fw-bold">Games Coming soon</h2>
        <p className="fw-semi-bold">
          View more Products <span>&gt;</span>
        </p>
      </div>
      <div className="body">
        <div className="slider-carousel">
          <Swiper
            modules={[Navigation, Pagination, EffectFade]}
            effect={"fade"}
            navigation={{
              prevEl: swiperNavPrev.current,
              nextEl: swiperNavNext.current,
            }}
            pagination={{
              // el: swiperPaginationRef.current,
              clickable: true,
            }}
            slidesPerView={1}
            speed={400}
            onInit={swiper => {
              swiper.params.navigation.prevEl = swiperNavPrev.current;
              swiper.params.navigation.nextEl = swiperNavNext.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="swiper"
          >
            {carouselSlice.map(({ id, img, title }, idx) => {
              return (
                <SwiperSlide className="slide" key={id}>
                  <img src={img} alt={title} />
                </SwiperSlide>
              );
            })}
            <button className="prev-btn" ref={swiperNavPrev}>
              &lt;
            </button>
            <button className="next-btn" ref={swiperNavNext}>
              &gt;
            </button>
          </Swiper>
        </div>

        {gridSlice.map((item, idx) => {
          return <GameCard {...item} key={item.id} showPrice />;
        })}
      </div>
    </section>
  );
}

export default ComingSoon;
