import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carousel.css";
import Card from "../Card";

import LeftArrow from "./leftArrow.png";
import RightArrow from "./rightArrow.png";

export default ({ data, navId }) => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        // onSwiper={setSwiperRef}
        slidesPerView={8}
        // centeredSlides={true}
        spaceBetween={30}
        // pagination={{
        //   type: "fraction",
        // }}
        // navigation={true}
        navigation={{
          nextEl: `.arrow-right-${navId}`,
          prevEl: `.arrow-left-${navId}`,
        }}
        virtual
      >
        {data.map((cardData) => (
          <SwiperSlide key={cardData.id}>
            <Card
              imgSrc={cardData.image}
              label={cardData.title}
              followersCount={cardData.follows}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`arrow-left-${navId} arrow-left arrow`}>
        <img src={LeftArrow}></img>
      </div>
      <div className={`arrow-right-${navId} arrow-right arrow`}>
        <img src={RightArrow}></img>
      </div>
    </div>
  );
};
