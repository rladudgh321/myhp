import Link from "next/link";
import Footer from "./Footer";
import { Row, Col } from 'antd';


const AppLayout = ({children}) => {
  return (
    <Row>
      <header>
        <Col xs={6} md={6} sm={6} >
          <div className="logo">
            <img />
          </div>
        </Col>
          <nav>
            <Col xs={0} md={18} sm={18} >
              <ul>
                <li><Link>샘플보기</Link></li>
                <li><Link>솔루션소개</Link></li>
                <li><Link>자주묻는질문</Link></li>
                <li><Link>가격안내</Link></li>
                <li><Link>상담신청</Link></li>
                <li><Link>문의전화</Link></li>
              </ul>
             </Col>
             <Col xs={18} md={0} sm={0}>
              
             </Col>
          </nav>
      </header>
      {children}
      <Footer />
    </Row>
  );
}

export default AppLayout;