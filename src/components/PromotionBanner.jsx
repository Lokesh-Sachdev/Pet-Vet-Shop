import { Swiper, SwiperSlide } from 'swiper/react';
import {
  promotionBanner1,
  promotionBanner2,
  promotionBanner3,
  promotionBanner4,
  promotionFooter,
  promotionFooterMob,
  promotionHeader,
  promotionHeaderMob,
} from '../assets';

const PromotionBanner = () => {
  return (
    <section className="promotion__container">
      <div className="promotion__img">
        <picture>
          <source media="(min-width: 767px)" srcset={promotionHeader} />
          <img alt="Promotion-header" srcset={promotionHeaderMob} />
        </picture>
      </div>
      <h1>Try Sara's Wholesome Food</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
          320: {
            slidesPerView: 1,
          },
        }}
        className="promotion__swiper"
      >
        <SwiperSlide>
          <img src={promotionBanner2} alt="Promotion-Banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={promotionBanner1} alt="Promotion-Banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={promotionBanner3} alt="Promotion-Banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={promotionBanner4} alt="Promotion-Banner" />
        </SwiperSlide>
      </Swiper>
      <div className="promotion__img">
        <picture>
          <source media="(min-width: 767px)" srcset={promotionFooter} />
          <img alt="Promotion-Footer" srcset={promotionFooterMob} />
        </picture>
      </div>
    </section>
  );
};

export default PromotionBanner;
