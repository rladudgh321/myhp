import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  }
];
const data = [
  {
    key: 1,
    name: '다음지도 구글지도 선택 가능 한가요?',
    description: '네 관리자에서 다음지도(무료) 또는 구글지도(월 3만건~4만건 까지 무료 이후 유료)로 사용중에 언제든지 변경 가능합니다.',
  },
  {
    key: 2,
    name: '작업기간은 얼마나 걸리나요?',
    description: '일반적으로 입금 확인 후 설치까지 1시간이내로 매물등록이 바로 가능합니다. * 로고 및 화면 구성등 요청사항에대한 디자인은 2~3일정도 소요됩니다.',
  },
  {
    key: 3,
    name: '별도 유지비가 있나요?',
    description: `유지비는 호스팅비용과 도메인비용이 있습니다.
    * 호스팅 비용은 1년간 1기가(매물 600개 가량)에 5만원이며 첫해 1년 제공지원해 드립니다.
    * 도메인 비용은 1년에 2만5천원으로 첫해 1년 제공지원해 드립니다.
    * 호스팅:서버임대비용
    * 도메인:사이트주소 (예 : naver.com)`,
  },
  {
    key: 4,
    name: '완성 후 수정사항이 있을 땐 어떻게 하나요?',
    description: `대대적인 디자인 컨셉이 바뀌지 않는 간단한 수정은 한달간 제공 A/S 해드리고 있습니다.
    또는 관리자 기능을 이용하여 직접 변경 하는것도 가능합니다.`,
  },
  {
    key: 5,
    name: '모바일은 포함인가요?',
    description: `네 반응형 사이트로 모바일은 포함되어 있습니다.
    PC/노트북/휴대폰/태블릿 모두 지원합니다.
    모바일웹이 아닌 안드로이드앱과 아이폰앱의 별도의추가 견적으로 제작 가능합니다.
    
    모바일웹 : 무료
    안드로이드 : 149만원(vat 별도)
    아이폰 : 179만원(vat 별도)
    *아이폰의 경우 년간 개발자 등록비 12만9천원이 추가됩니다.`,
  },
  {
    key: 6,
    name: '신용카드 할부구매가 가능한가요?',
    description: `네 큰나무솔루션의 페이앱 결제링크를 보내드리면 소지하신 신용카드로 할부구매가 가능합니다.`,
  },
  {
    key: 7,
    name: '현재 위치 및 HTTPS 사용을 위해 보안서버가 가능한가요?',
    description: `네 현재위치를 사용하시려면 보안 인증서를 구매하셔야 합니다.
    보안서버 인증서는 년간 12만원의 추가금액이 발생합니다.`,
  }
];
const TableLable = () => (
  <Table
    style={{ maxWidth:'1110px', maxHeight:'1760px', margin: '50px auto 0' }}
    columns={columns}
    expandable={{
      expandedRowRender: (record) => (
        <p
          style={{
            margin: 0,
          }}
        >
          {record.description}
        </p>
      ),
      rowExpandable: (record) => record.name !== 'Not Expandable',
    }}
    dataSource={data}
  />
);
export default TableLable;