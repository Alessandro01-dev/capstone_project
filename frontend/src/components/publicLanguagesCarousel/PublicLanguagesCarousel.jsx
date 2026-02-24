import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { languagesMock } from '../../components/settings/languagesSettings/languagesMock';
import classes from './PublicLanguagesCarousel.module.css';
import { getFlagCode } from '../../utils/getFlagCode';

const PublicLanguagesCarousel = () => {

  const [randomLanguages] = useState(() => {
    const shuffled = [...languagesMock].sort(() => 0.5 - Math.random());
    return [...shuffled, ...shuffled];
  });

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
          loop={true}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          slidesPerView={2}
          speed={2000}
          breakpoints={{
            640: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
              speed: 1000
            },
            1440: {
              slidesPerView: 8,
            }
          }}
          className={classes["swiper-wrapper-linear"]}
        >
          {randomLanguages.map((lang, index) => (
            <SwiperSlide key={`${lang.value}-${index}`}>
              <div
                className="bg-white px-4 py-2 my-2 rounded-pill shadow-sm border d-flex align-items-center gap-3 justify-content-center"
              >
                <div className={classes["flag-picture-container"]}>
                  <img
                    className="w-100 h-100 d-block object-fit-cover rounded-circle"
                    src={`https://flagcdn.com/w40/${getFlagCode(lang.value)}.png`}
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
