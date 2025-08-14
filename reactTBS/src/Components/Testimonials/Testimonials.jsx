import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import img1 from "../../assets/images/testimonial-1.webp";
import img2 from "../../assets/images/testimonial-2.webp";
import img3 from "../../assets/images/testimonial-3.webp";
import img4 from "../../assets/images/testimonial-4.webp";

const Testimonials = () => {
  const testimonials = [img1, img2, img3, img4];

  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Testimonial
          </h6>
          <h1 className="mb-5">Our Students Say!</h1>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          speed={1000}
        >
          {testimonials.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item text-center mx-auto" style={{ maxWidth: "600px" }}>
                <img
                  className="border rounded-circle p-2 mx-auto mb-3"
                  src={img}
                  alt={`Testimonial ${index + 1}`}
                  style={{ width: "80px", height: "80px" }}
                />
                <h5 className="mb-0">Client Name</h5>
                <p>Profession</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                    diam amet diam et eos. Clita erat ipsum et lorem et sit.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
