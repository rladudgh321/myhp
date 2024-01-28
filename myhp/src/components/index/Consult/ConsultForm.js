import { Button, Form, Input } from "antd";

const ConsultForm = () => {
  return (
    <div style={{ maxWidth:'1110px', maxHeight:'1760px', display: 'flex', flexDirection:'column', alignItems: 'center', margin: '0 auto' }}>
      <Form>
        <Input placeholder="* 성함" style={{ marginTop: '10px' }} />
        <Input placeholder="* 연락처" style={{ marginTop: '10px' }} />
        <Input placeholder="솔루션문의" style={{ marginTop: '10px' }} />
        <Input.TextArea placeholder="궁금하신 내용을 작성해 주세요" style={{ marginTop: '10px' }} />
        <Button style={{ background:'yellow', fontSize: '1.3rem', fontWeight:'bold', height: '40px', float:'right', marginTop:'10px' }}>홈페이지 상담신청</Button>
      </Form>
    </div>
  );
}

export default ConsultForm;