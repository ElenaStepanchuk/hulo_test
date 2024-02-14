import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import PopUp from "./components/popUp/popUp";

import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

import { Navigation } from "swiper/modules";
import VimeoPlayer from "./components/vimeoPlayer/vimeoPlayer";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const video1 = useRef();
  // console.log(video1.current);

  const video2 = useRef();
  // console.log(video2.current);

  const click = () => {
    setIsOpen(true);
  };

  const Close = () => {
    setIsOpen(false);
  };
  return (
    <>
      {!isOpen && (
        <Swiper
          slidesPerView={4}
          // spaceBetween={20}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide ref={video1} onClick={click}>
            <VimeoPlayer className="video" play={false} />
            {/* <video
              poster="https://player.vimeo.com/video/824804225"
              preload="metadata"
            >
              <source
                src="https://player.vimeo.com/video/824804225"
                type="video/mp4"
              />
            </video> */}
          </SwiperSlide>
          <SwiperSlide ref={video2} onClick={click}>
            <VimeoPlayer play={false} />
          </SwiperSlide>
          <SwiperSlide onClick={click}>
            <VimeoPlayer play={false} />
          </SwiperSlide>
          <SwiperSlide onClick={click}>
            <VimeoPlayer play={false} />
          </SwiperSlide>
          <SwiperSlide onClick={click}>
            <VimeoPlayer play={false} />
          </SwiperSlide>
          <SwiperSlide onClick={click}>
            <VimeoPlayer play={false} />
          </SwiperSlide>
          <SwiperSlide onClick={click}>
            <VimeoPlayer play={false} />
          </SwiperSlide>
          <SwiperSlide onClick={click}>
            <VimeoPlayer play={false} />
          </SwiperSlide>
        </Swiper>
      )}
      {isOpen && (
        <div>
          <PopUp close={Close} />
        </div>
      )}
    </>
  );
}
