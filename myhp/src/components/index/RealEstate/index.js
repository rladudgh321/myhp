import { Button, List } from "antd"; 
import Living from './Living';
const RealEstate = () => {
  const items = [{
    id:1,
    image: { src: 'https://bigwood.kr/static/images/sample1.png' },
  },{
    id:2,
    image: { src: 'https://bigwood.kr/static/images/sample5.png' },
  },{
    id:3,
    image: { src: 'https://bigwood.kr/static/images/sample7.png' },
  },{
    id:4,
    image: { src: 'https://bigwood.kr/static/images/sample12.png' },
  }]
  return (
    <div style={{ textAlign: 'center', padding: '10px', maxWidth:'1110px', maxHeight:'1760px', margin: '0 auto' }}>
      <div style={{ fontWeight: 'bold', fontSize: '2rem' }}>부동산 홈페이지 샘플보기</div>
      <div style={{ marginTop: '15px', fontSize: '1.3rem' }}>성공적인 부동산 매물홍보를 위해 준비된 파트너 큰나무 솔루션</div>
      <div style={{ marginTop: '15px', fontSize: '1.3rem' }}>중개사분들의 부동산 마케팅을 책임지는 비즈니스 파트너 입니다.</div>
      <Living items={items} title='일반 주거형' />
      <Living items={items} title='신축 분양형' />
      <Living items={items} title='상가형' />
      <Living items={items} title='사무실, 빌딩, 토지, 공장' />
      <Living items={items} title='해외형, 플랫폼형' />
    </div>
  );
}

export default RealEstate;