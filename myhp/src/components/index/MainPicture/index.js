import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Row } from 'antd';
import SecondMainPage from './SecondMainPage';
import FirstMainPage from './FirstMainPage';

const MainPicture = () => {
  return (
    <>
      <Row>
        <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ height:'106vh' }}
      >
        <SwiperSlide style={{
          zIndex:'100',
          backgroundImage:"url('https://ecplaza-export.com/wp-content/uploads/2023/03/bg-1.png')",
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          // opacity:op,
        }} >
          <FirstMainPage />
        </SwiperSlide>
        <SwiperSlide>
          <SecondMainPage />
        </SwiperSlide>
      </Swiper>
      </Row>
    </>
  );
}

export default MainPicture;