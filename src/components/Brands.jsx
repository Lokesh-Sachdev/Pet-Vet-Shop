import { brands } from '../utils/data';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import BrandCard from './Card/BrandCard';

const Brands = () => {
  return (
    <section className="brands__container">
      <h1>Popular Food Brands</h1>
      <Swiper
        // slidesPerView={7}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          1200: {
            slidesPerView: 7,
          },
          992: {
            slidesPerView: 6,
          },
          768: {
            slidesPerView: 5,
          },
          320: {
            slidesPerView: 3,
          },
        }}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <BrandCard brand={brand} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Brands;
