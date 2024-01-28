import TableLable from './TableLable';

const QnA = () => {
  return (
    <>
      <div style={{ textAlign: 'center', maxWidth:'1110px', maxHeight:'1760px', margin: '0 auto' }}>
        <div style={{ fontSize: '2rem' }}>자주묻는 질문</div>
        <div style={{ marginTop: '15px', fontSize: '1.3rem' }}>큰나무솔루션에 자주묻는 질문을 모았습니다</div>
        <div style={{ marginTop: '15px', fontSize: '1.3rem' }}>중개사님의 더욱 쉽게 이해 할 수 있도록 친절하게 설명해 드리겠습니다</div>
      </div>
      <TableLable />
    </>
  );
}

export default QnA;