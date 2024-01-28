import React, { useEffect } from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  color: 'black',
  lineHeight: '20px',
  textAlign: 'center',
  background: 'white',
  maxWidth: '350px',
  margin: '0 auto',
  border: '1px solid gray',
  boxShadow: '5px 5px 7px 2px',
  height:'190px'
};
const Card = () => {
  useEffect(() => {
    const list = document.querySelector('.slick-list');
    list.style.height = '330px';
  },[]);
  return (
  <Carousel autoplay style={{ maxWidth:'1110px', maxHeight:'1760px', margin: '30px auto' }}>
    <div className='card-component'>
      <h3 style={contentStyle}>
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem', padding: '15px' }}>직원관리가 쉬워졌어요
          <p style={{ overflow:'visible', fontSize: '1rem', fontWeight:'normal', marginTop: '15px' }}>
            미니홈피 기능을 통해 어떤직원의 매물이 얼마나 노출이 되고 있는지 트래킹이 가능하여 너무 편리합니다.
						또한 직원 관리도 할 수 있어 너무 좋네요
          </p>
          <img src='https://bigwood.kr/static/images/h4.png' style={{ width:'90px', height: '90px', borderRadius: '100%', margin: '15px auto 15px' }} />
        </div>
        <div style={{ margin: '-20px' }}>
          <div>Serpas</div>
          <div>⭐⭐⭐⭐⭐</div>
        </div>
      </h3>
    </div>
    <div className='card-component'>
      <h3 style={contentStyle}>
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem', padding: '15px' }}>직원관리가 쉬워졌어요
          <p style={{ overflow:'visible', fontSize: '1rem', fontWeight:'normal', marginTop: '15px' }}>
            미니홈피 기능을 통해 어떤직원의 매물이 얼마나 노출이 되고 있는지 트래킹이 가능하여 너무 편리합니다.
						또한 직원 관리도 할 수 있어 너무 좋네요
          </p>
          <img src='https://bigwood.kr/static/images/h4.png' style={{ width:'90px', height: '90px', borderRadius: '100%', margin: '15px auto 15px' }} />
        </div>
        <div style={{ margin: '-20px' }}>
          <div>Serpas</div>
          <div>⭐⭐⭐⭐⭐</div>
        </div>
      </h3>
    </div>
    <div className='card-component'>
      <h3 style={contentStyle}>
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem', padding: '15px' }}>직원관리가 쉬워졌어요
          <p style={{ overflow:'visible', fontSize: '1rem', fontWeight:'normal', marginTop: '15px' }}>
            미니홈피 기능을 통해 어떤직원의 매물이 얼마나 노출이 되고 있는지 트래킹이 가능하여 너무 편리합니다.
						또한 직원 관리도 할 수 있어 너무 좋네요
          </p>
          <img src='https://bigwood.kr/static/images/h4.png' style={{ width:'90px', height: '90px', borderRadius: '100%', margin: '15px auto 15px' }} />
        </div>
        <div style={{ margin: '-20px' }}>
          <div>Serpas</div>
          <div>⭐⭐⭐⭐⭐</div>
        </div>
      </h3>
    </div>
    <div className='card-component'>
      <h3 style={contentStyle}>
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem', padding: '15px' }}>직원관리가 쉬워졌어요
          <p style={{ overflow:'visible', fontSize: '1rem', fontWeight:'normal', marginTop: '15px' }}>
            미니홈피 기능을 통해 어떤직원의 매물이 얼마나 노출이 되고 있는지 트래킹이 가능하여 너무 편리합니다.
						또한 직원 관리도 할 수 있어 너무 좋네요
          </p>
          <img src='https://bigwood.kr/static/images/h4.png' style={{ width:'90px', height: '90px', borderRadius: '100%', margin: '15px auto 15px' }} />
        </div>
        <div style={{ margin: '-20px' }}>
          <div>Serpas</div>
          <div>⭐⭐⭐⭐⭐</div>
        </div>
      </h3>
    </div>
  </Carousel>
) };
export default Card;