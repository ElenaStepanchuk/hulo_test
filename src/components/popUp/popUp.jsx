import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { MdOutlineClose } from "react-icons/md";

import "swiper/css";
import "swiper/css/pagination";

import "./popUp.css";

import { Pagination } from "swiper/modules";

export default function PopUp({ close }) {
  return (
    <div className="container">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
      </Swiper>
      <button type="button" className="close_button" onClick={close}>
        <MdOutlineClose />
      </button>
    </div>
  );
}
