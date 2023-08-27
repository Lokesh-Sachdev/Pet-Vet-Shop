import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import headerBanner1 from '../assets/header_banner_1.webp';
import headerBanner2 from '../assets/header_banner_2.webp';
import headerBanner3 from '../assets/header_banner_3.webp';

const HeaderBanner = () => {
  return (
    <Swiper
      spaceBetween={30}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="header__container"
    >
      <SwiperSlide>
        <img src={headerBanner1} alt="header-banner-1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={headerBanner2} alt="header-banner-2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={headerBanner3} alt="header-banner-3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeaderBanner;
