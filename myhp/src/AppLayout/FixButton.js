import { PhoneFilled, WechatOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const FixButton = () => {
  return (
    <div style={{ zIndex: '500000', position:'absolute' }}>
      <div className="fix_button_application" style={{ position: 'fixed', top:'50%', right:0  }}>
        <Button style={{ background: '#aa3f3f', color: 'white', height: '60px' }}>신청서<br />바로가기</Button>
      </div>
      <div className="fix_button_phone" style={{ position: 'fixed', bottom: 0, left: 0 }}>
        <Button style={{ background:'red', color:'white' }}><PhoneFilled />070.1234.5678</Button>
      </div>
      <div className="fix_button_kakao" style={{ position: 'fixed', bottom:0, right:0 }}>
        <Button style={{background: 'yellow', borderRadius: '10% 10%'}}><WechatOutlined />카톡 상담</Button>
      </div>
    </div>
  );
}

export default FixButton;