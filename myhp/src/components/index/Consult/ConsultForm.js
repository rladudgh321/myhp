import { Button, Form, Input } from "antd";

const ConsultForm = () => {
  return (
    <Form>
      <Input placeholder="* 성함" />
      <Input placeholder="* 연락처" />
      <Input placeholder="솔루션문의" />
      <Input.TextArea placeholder="궁금하신 내용을 작성해 주세요" />
      <Button style={{ background:'yellow' }}>홈페이지 상담신청</Button>
    </Form>
  );
}

export default ConsultForm;