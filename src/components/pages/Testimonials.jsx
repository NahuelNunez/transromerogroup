import React from "react";
import { testimonials } from "../../constants/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const Testimonials = () => {
  return (
    <section id="testimonios" className="text-center py-20 px-4 bg-white">
      <h2 className="text-3xl font-bold text-blue-950 mb-6 font-orbitron">
        Testimonios
      </h2>

      <Swiper
        modules={[Autoplay, Pagination, Mousewheel]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        paginatio
        mousewheel
        loop
        slidesPerView={1}
        className="max-w-3xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide className="py-5 my-5" key={index}>
            <blockquote className=" text-gray-600 mb-6">
              “{testimonial.quote}”
            </blockquote>
            <div className="flex justify-center items-center gap-3">
              <p className="text-gray-700 font-medium">{testimonial.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
