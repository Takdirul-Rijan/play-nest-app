import React, { use } from "react";

const sliderPromise = fetch("/toydata.json").then((res) => res.json());

const Slider = () => {
  // console.log(sliderPromise);

  const slider = use(sliderPromise);

  return (
    <section className="w-full py-3 bg-gradient-to-r from-pink-50 via-rose-50 to-yellow-50">
      <div className="w-11/12 mx-auto relative">
        <div className="carousel w-full">
          {slider.map((slide) => (
            <div
              key={slide.toyId}
              id={`slide${slide.toyId}`}
              className="carousel-item relative w-full"
            >
              <img
                src={slide.pictureURL}
                className="w-full h-64 md:h-80 object-contain"
                alt=""
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {slider.map((slide) => (
            <a
              key={slide.toyId}
              href={`#slide${slide.toyId}`}
              className="btn btn-xm hover:bg-green-400"
            >
              •
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
