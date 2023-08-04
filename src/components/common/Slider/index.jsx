import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import 'swiper/css';

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import MediaContainer from '../MediaContainer';

import './sliderStyles.css';

const Slider = ({
  slides,
  clearPlaceholders,
  onPick,
  showPlaceholder,
  toPage,
  bp,
  slidesPerView,
  spaceBetween,
  loop,
  centeredSlides,
  grabCursor,
  autoplay,
  pagination,
  navigation,
  allowTouchMove = true,
  modules,
  sliderClassName,
  slideClassName,
  mediaContainerClassName,
  imageFillClassName,
  imagePlaceholderClassName,
  imageClassName,
}) => {
  return (
    <>
      <Swiper
        breakpoints={bp ? bp : undefined}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={loop}
        centeredSlides={centeredSlides}
        grabCursor={grabCursor}
        autoplay={autoplay}
        pagination={pagination}
        navigation={navigation}
        allowTouchMove={allowTouchMove}
        modules={modules}
        className={`${sliderClassName} slider-navigation`}
        // nested={true}
        // onTouchStart={true}
        // onDragStart={true}
      >
        {navigation && (
          <>
            <div
              className={`swiper-button image-swiper-button-prev ${
                showPlaceholder ? 'no-show' : undefined
              }`}
            >
              <FaArrowLeft />
            </div>
            <div
              className={`swiper-button image-swiper-button-next ${
                showPlaceholder ? 'no-show' : undefined
              }`}
            >
              <FaArrowRight />
            </div>
          </>
        )}
        {/* TODO: update */}
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className={slideClassName}
            onClick={onPick ? () => onPick({ variantId: slide.id }) : undefined}
          >
            <MediaContainer
              image={slide.src}
              to={toPage && toPage + slide.url}
              alt={slide.alt || ''}
              clearPlaceholders={clearPlaceholders}
              containerClassName={mediaContainerClassName}
              fillClassName={imageFillClassName}
              placeholderClassName={imagePlaceholderClassName}
              mediaClassName={imageClassName}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
