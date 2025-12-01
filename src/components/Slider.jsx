import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const sliderPromise = fetch("/slider.json").then((res) => res.json());

const Slider = () => {
  const slider = use(sliderPromise);

  return (
    <section className="py-6">
      <div className="w-11/12 mx-auto h-[50vh] md:h-[65vh] relative">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper w-full h-full rounded-xl overflow-hidden shadow-lg"
        >
          {slider.map((slide) => (
            <SwiperSlide key={slide.toyId}>
              <div className="w-full h-full">
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
