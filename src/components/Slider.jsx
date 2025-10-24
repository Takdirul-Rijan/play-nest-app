import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const sliderPromise = fetch("/slider.json").then((res) => res.json());

const Slider = () => {
  const slider = use(sliderPromise);

  return (
    <section className="w-full h-[80vh] md:h-[90vh] bg-gradient-to-r from-pink-50 via-rose-50 to-yellow-50">
      <div className="w-full h-full relative">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper w-full h-full"
        >
          {slider.map((slide) => (
            <SwiperSlide key={slide.toyId}>
              <div className="w-full h-full relative">
                <img
                  src={slide.pictureURL}
                  alt=""
                  className="w-full h-full object-center"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
