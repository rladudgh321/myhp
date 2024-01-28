import { Button } from "antd";

const Footer = () => {
  return (
    <div style={{ maxWidth:'1110px', maxHeight:'1760px', margin: '0 auto' }}>
      <div className="footer_img">
        <img src="https://bigwood.kr/static/images/logo.png?v=1" />
      </div>
      <div className="footer_content">
        <div style={{ fontWeight: 'bold' }}>Bigwood Company</div>
        주소: 서울시 강남구 강남대로 84길 33 / 사업자 등록번호 : 470-22-00273

        고객센터: 070-7767-1911 / 개발상담:010-4998-1911 이민우 팀장 / Email: bigwood@bigwood.kr

        사업자명: 큰나무 컴퍼니
      </div>
      <div><Button>신청서 바로가기</Button></div>

      <div className="footer_line" style={{ borderTop: '1px solid silver' }}></div>
      <div>© 2024 Bigwood Company. All Rights Reserved</div>
    </div>
  );
}

export default Footer;