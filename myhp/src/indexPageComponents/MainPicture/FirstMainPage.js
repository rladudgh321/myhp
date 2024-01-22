import { Col, Row } from "antd";

const FirstMainPage = () => {
  return (
    <>
      {/* 백그라운드 이미지 */}
      <img src="https://img.freepik.com/free-photo/white-cloud-on-blue-sky_74190-7709.jpg?w=1380&t=st=1705920403~exp=1705921003~hmac=d9920977173c97e193ff9914c9ecefa51e8458b78e6971963823c7c6f0a5c580" 
      alt="mainPicture" style={{ width: '100vw', height: '100vh', opacity:0.4 }}/>
      <Row>
        <Col xs={24}>
            <div className="mainChar">
              <div>파트너사의 수출 전략을 함께 고민합니다</div>
              <div>해외마케팅의 성공파트너</div>
              <div>이씨플라자</div>
            </div>
        </Col>
      </Row>
    </>
  );
}

export default FirstMainPage;