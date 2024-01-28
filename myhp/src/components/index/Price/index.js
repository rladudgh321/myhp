import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <div style={{ maxWidth:'1110px', maxHeight:'1760px', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto' }}>
      <div style={{ display: 'flex', flexDirection:'column', alignItems: 'center' }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>솔루션 가격 안내</div>
          <div style={{ marginTop: '15px', fontSize: '1.3rem' }}>부동산 시장이 함게 발전할 수 있도록 저렴한 비용으로 솔루션을 구축해 드립니다</div>
          <div style={{ marginTop: '15px', fontSize: '1.3rem' }}>최상의 기능과 디자인으로 끝까지 최선을 다하는 큰나무 솔루션 입니다</div>
      </div>
      <PriceCard />
    </div>
  );
}

export default Price;