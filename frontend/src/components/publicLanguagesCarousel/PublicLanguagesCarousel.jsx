import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { languagesMock } from '../../components/settings/languagesSettings/languagesMock';
import classes from './PublicLanguagesCarousel.module.css';

const PublicLanguagesCarousel = () => {
  const [randomLanguages, setRandomLanguages] = useState([]);

  useEffect(() => {
    const shuffled = [...languagesMock]
      .sort(() => 0.5 - Math.random())
    setRandomLanguages(shuffled);
  }, []);

  return (
    <div className="bg-light py-5 border-top border-bottom">
      <Container fluid className="px-0">
        <div className="text-center mb-5 px-3">
          <h2 className="fw-bold">Learn the language of your dreams</h2>
          <p className="text-muted">Over 75 languages supported by our global community</p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={'auto'}
          loop={true}
          speed={1000}
          allowTouchMove={false}
          autoplay={{
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
          }}
          className={classes["swiper-wrapper-linear"]}
        >
          {randomLanguages.map((lang, index) => (
            <SwiperSlide key={`${lang.value}-${index}`}>
              <div
                className="bg-white px-4 py-3 rounded-pill shadow-sm border d-flex align-items-center gap-3 justify-content-center"
              >
                <div className={classes["flag-picture-container"]}>
                  <img
                    className="w-100 h-100 d-block object-fit-cover rounded-circle"
                    src={`https://flagcdn.com/w640/${lang.value}.png`}
                    alt={lang.label}
                  />
                </div>
                <span className="fw-medium text-nowrap">{lang.label}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-5">
          <p className="small text-muted">Join all the students already learning on Talk Mate</p>
        </div>
      </Container>
    </div>
  );
};

export default PublicLanguagesCarousel;
