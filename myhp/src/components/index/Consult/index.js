import ConsultForm from "./ConsultForm";

const Consult = () => {
  return (<>
    <div style={{ textAlign: 'center' }}>
      <div>홈페이지 상담신청</div>
        솔루션에 궁금한 사항이 있으신가요?
        문의를 남겨주시면 친절히 상담해 드리겠습니다
    </div>
    <ConsultForm />
    </>
  );
}

export default Consult;