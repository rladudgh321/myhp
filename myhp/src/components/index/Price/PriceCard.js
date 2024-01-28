const PriceCard = () => {
  return (
    <div style={{ maxWidth:'1110px', maxHeight:'1760px', margin: '0 auto' }}>
      <div className="price_card">

      </div>
      <div className="price_card_box" style={{ border: '1px solid black' }}>
      <div style={{ textAlign:'center', fontWeight:'bold'  }}>유지비용 및 기타안내</div>
        <div style={{ marginTop: '10px' }}>호스팅 1년 1기가(매물 600개 가량) 5만원</div>
        <div style={{ marginTop: '10px' }}>도메인 1년 2만원5천원</div>
        <div style={{ marginTop: '10px' }}>부가가치세 10%는 별도 입니다</div>
      </div>
    </div>
  );
}

export default PriceCard;