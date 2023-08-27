import './Home.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import HeaderBanner from '../../components/HeaderBanner';
import Footer from '../../components/Footer';
import Brands from '../../components/Brands';
import PromotionBanner from '../../components/PromotionBanner';
import Testimonials from '../../components/Testimonials';

const Home = () => {
  return (
    <div className="home__container">
      <HeaderBanner />
      <Brands />
      <PromotionBanner />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
