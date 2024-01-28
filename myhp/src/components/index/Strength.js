import { List } from "antd";

const Strength = () => {
  const items = [{
    id:1,
    title: '쉽고편리한 인터페이스',
    desc: '관리자에서 레이아웃을 자유롭게 변경 할 수 있습니다. 자유도는 그어떤 솔루션의 이상을 보여줍니다.',
    src: 'https://bigwood.kr/static/images/icons/tap.png'
  }, {
    id:2,
    title: '다양한 컨텐츠 관리',
    desc: '큰나무 솔루션은 매물종류,테마,검색등을 사용하시는 부동산의 특성에 맞게 자유롭게 변경이 가능합니다.',
    src: 'https://bigwood.kr/static/images/icons/settings-1.png'
  }, {
    id: 3,
    title: '매물정보 블로그,카페 발행 기능',
    desc: '등록 된 매물의 정보, 매물사진, 담당자의 정보를 한 번의 클릭으로 티스토리 블로그, 네이버카페에 발행하여 포스팅 할 수 있습니다.',
    src: 'https://bigwood.kr/static/images/icons/share-2.png'
  }, {
    id: 4,
    title: '미니홈피 기능',
    desc: '미니홈피 기능으로 직원들이 별도로 홈페이지를 구매하지 않아도 매물 홍보가 가능하며 관리자는 이를통한 효과를 쉽게 확인 할 수 있습니다.',
    src: 'https://bigwood.kr/static/images/icons/television-1.png'
  }, {
    id: 5,
    title: '현재위치 서비스',
    desc: '홈페이지를 이용하는 고객들을 자신의 위치로부터 매물을 검색할 수 있습니다.',
    src: 'https://bigwood.kr/static/images/icons/route.png'
  }, {
    id: 6,
    title: '고객관리 서비스',
    desc: '관리자 고객관리를 이용해 해당매물의 임차인,매수자,매도자 등의 정보를 트래킹 할 수 있습니다.',
    src: 'https://bigwood.kr/static/images/icons/users.png'
  }]
  return (
    <div style={{ maxWidth:'1110px', maxHeight:'1760px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>큰나무 솔루션만의 강점</div>
        <div style={{ marginTop: '15px', fontSize: '1.3rem' }}>
          큰나무솔루션만의 특별한 강점을 확인해보세요
        </div>
        <div style={{ marginTop: '15px', fontSize: '1.3rem' }}>중개사님의 매출을 올려줄 큰나무 솔루션만의 시스템</div>
      </div>
      <List
        bordered
        grid={{ xxl:3, xl:3, lg: 3, md: 3, sm: 2, xs:2 }}
        dataSource={items}
        renderItem={({title, desc, src}) => {
          return (
          <List.Item style={{ display: 'flex' }}>
            <div className="Strength_img">
              <img width={50} src={src} />
            </div>
            <div>
              <div>{title}</div>
              {desc}
            </div>
          </List.Item>
          )
        }}
      >
      </List>
    </div>
  );
}

export default Strength;