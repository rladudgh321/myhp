import ConsultForm from "./ConsultForm";

const Consult = () => {
  return (<>
    <div style={{ maxWidth:'1110px', maxHeight:'1760px', display: 'flex', flexDirection:'column', alignItems: 'center', margin: '0 auto' }}>
      <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>홈페이지 상담신청</div>
        <div style={{ fontSize:'1.3rem', marginTop:'1.5px' }}>솔루션에 궁금한 사항이 있으신가요?</div>
        <div style={{ fontSize:'1.3rem', marginTop:'1.5px' }}>문의를 남겨주시면 친절히 상담해 드리겠습니다</div>
    </div>
    <ConsultForm />
    </>
  );
}

export default Consult;