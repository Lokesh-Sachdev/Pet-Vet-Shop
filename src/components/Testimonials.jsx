import { Swiper, SwiperSlide } from 'swiper/react';
import {
  testimonialImg_1,
  testimonialImg_2,
  testimonialImg_3,
  testimonialImg_4,
  testimonialImg_5,
  testimonialImg_6,
} from '../assets';
import { Autoplay } from 'swiper/modules';

const Testimonials = () => {
  return (
    <section className="testimonial__container">
      <h1>The Wholesome Love</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          320: {
            slidesPerView: 2,
          },
        }}
        className="promotion__swiper"
      >
        <SwiperSlide>
          <img src={testimonialImg_1} alt="Testimonial" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={testimonialImg_2} alt="Testimonial" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={testimonialImg_3} alt="Testimonial" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={testimonialImg_4} alt="Testimonial" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={testimonialImg_5} alt="Testimonial" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={testimonialImg_6} alt="Testimonial" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
