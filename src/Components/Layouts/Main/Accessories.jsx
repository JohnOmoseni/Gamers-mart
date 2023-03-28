import React from "react";
import useShopContext from "../../../Context/ShopContext";
import GameCard from "./GameCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { useRef } from "react";

function Accessories() {
  const { products } = useShopContext();
  const swiperImages = products.slice(35, 42);

  const swiperNavPrev = useRef();
  const swiperNavNext = useRef();

  return (
    <section id="accessories">
      <div className="heading">
        <h2 className="fw-bold">Consoles and Accessories</h2>
        <p className="fs-small fw-semi-bold">
          View more Products <span></span>
        </p>
      </div>

      <div className="accessories">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: swiperNavPrev.current,
            nextEl: swiperNavNext.current,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          speed={800}
          spaceBetween={16}
          className="swiper"
          breakpoints={{
            450: {
              slidesPerView: 2,
            },
            700: {
              slidesPerView: 4,
            },
          }}
          centeredSlides={true}
          loop={true}
          onInit={swiper => {
            swiper.params.navigation.prevEl = swiperNavPrev.current;
            swiper.params.navigation.nextEl = swiperNavNext.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {swiperImages.map(item => {
            return (
              <SwiperSlide className="swiper-slide" key={item.id}>
                <GameCard {...item} showPrice />
              </SwiperSlide>
            );
          })}

          <div className="swiper-nav-prev" ref={swiperNavPrev}>
            &lt;
          </div>
          <div className="swiper-nav-next" ref={swiperNavNext}>
            &gt;
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default Accessories;
