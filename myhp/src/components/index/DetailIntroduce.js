const DetailIntroduce = () => {
  const content_title = { fontSize: '1.3rem'};
  return (
    <div style={{ maxWidth:'1110px', maxHeight:'1760px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', margin: '30px 0' }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>홈페이지 솔루션 소개</div>
        <div style={{ marginTop: '15px', fontSize: '1.3rem' }}>샘플을 확인해 보세요 솔루션하나로 다양한 홈페이지 구성이 가능합니다.</div>
        <div style={{ marginTop: '15px', fontSize: '1.3rem' }}>매물관리부터 디자인, 매물종류, 테마 및 기타설정이 관리자에서 변경이 가능합니다.</div>
      </div>
      <div className="DetailIntroduce_content" style={{ display: 'flex' }}>
        <div className="DetailIntroduce_content_child">
          <div>
          <div style={content_title}>지도기반 홈페이지로 업무 활용도 증가</div>
            직방,다방과 같은 지도형 서비스로 사용자에게 친숙하고 편리한 환경을 제공하며 위치기반 서비스를 이용하실 수 있습니다.
          </div>
          <div style={content_title}>
            <div>매물 SNS공유로 중개기회 증가</div>
            티스토리 블로그,네이버카페 매물내용 전송,검색엔진 최적화, 모바일 최적화, SNS 공유, 매수 매도 실시간 알람 등 다양한 기능을 제공해 드리고 있습니다.
          </div>
          <div style={content_title}>
            <div>신청후 사용까지 1시간!</div>
            솔루션 신청후 1시간이내로 매물 등록이 가능하여 곧바로 블로그,카페발행 및 SNS 공유 서비스를 이용하실 수 있습니다.
          </div>
          <div style={content_title}>
            <div>자유로운 디자인 커스텀</div>
            메인페이지부터 테마, 카테고리, 배너등 디테일한부분의 컬러까지 다양한 디자인을 자유롭게 커스터마이징 할 수 있습니다.
          </div>
        </div>
        <div className="DetailIntroduce_image">
          <img src="https://bigwood.kr/static/images/intro2.png" />
        </div>
      </div>
    </div>
  );
}

export default DetailIntroduce;