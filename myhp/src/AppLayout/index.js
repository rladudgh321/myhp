import React, { useCallback, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Menu, Row, Col } from 'antd';
import Footer from './Footer';
import FixButton from './FixButton';
// import '../../pages/style.css';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('회사소개', '회사소개', null, [
    getItem('인사말', '인사말', null, null, 'group'),
    getItem('경영이념', '경영이념', null, null, 'group'),
    getItem('회사이념', '회사이념', null, null, 'group'),
    getItem('찾아오시는길', '찾아오시는길', null, null, 'group'),
    getItem('인증내역', '인증내역', null, null, 'group'),
  ]),
  getItem('제품정보', '제품정보', null, [
    getItem('인체용', '인체용', null, null, 'group'),
    getItem('동물용', '동물용', null, null, 'group'),
  ]),
  getItem('제품구매', '제품구매', null, [
    getItem('코로나19 전문가용 신속진단키트', '코로나19 전문가용 신속진단키트', null, null, 'group'),
  ]),
  getItem('고객지원', '고객지원', null, [
    getItem('자주묻는 질문', '자주묻는 질문', null, null, 'group'),
    getItem('온라인문의', '온라인문의', null, null, 'group'),
  ]),
  getItem('PR센터', 'PR센터', null, [
    getItem('뉴스&공지', '뉴스&공지', null, null, 'group'),
    getItem('홍보자료', '홍보자료', null, null, 'group'),
  ]),
  getItem('Language', 'Language', null, [
    getItem('뉴스공지', '뉴스공지', null, null, 'group'),
    getItem('홍보자료', '홍보자료', null, null, 'group'),
  ]),
];

const AppLayout = ({children}) => {
  const [isMenu, setIsMenu] = useState(false);
  const showMenu = useCallback(() => {
    setIsMenu(true)
  }, []);
  const notShowMenu = useCallback(() => {
    setIsMenu(false)
  }, []);
      return (
        <>
        <FixButton />
        {/* <Global /> */}
          <Row gutter={0}
          style={{ zIndex:'1000',
          background:'rgba(0,0,0,0.1)', borderBottom:'0.5px solid white', position:'relative'
          }}>
              <Col xs={24} md={0}>
                  {isMenu
                  ?   <div style={{display:'flex',justifyContent:'end', width:'100%'}}>
                      <CloseOutlined onClick={notShowMenu} style={{position:'absolute',
                    top:0, right:0, zIndex:'10000', fontSize:'1.5rem', color:'white'
                    }}/>
                      <div style={{
                        position:'absolute',
                        right:0, top:"5%"
                      }}>
                        <Menu
                                style={{
                                width: 256,
                                position:'relative',
                                top:'10%',
                                background:'gray',
                                opacity:'80%',
                                zIndex:'1000'
                                }}
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                items={items}
                                
                        />
                      </div>
                      <img src='http://zetbio.com/theme/zb/img/main/logo-white.png' style={{
                    zIndex:'10', position:'absolute', top:0, left:0, paddingLeft:'5% 10%', margin:'0'
                  }}/>
                  </div>
                  : <>
                  <div style={{display:'flex', justifyContent:'end', width:'100%', zIndex:'100'}}>
                    <MenuOutlined onClick={showMenu} style={{
                      fontSize:'1.5rem', color:'white', padding:'15px'}}
                    />
                  </div>
                    <div style={{height:'50%'}}>
                      <img src='http://zetbio.com/theme/zb/img/main/logo-white.png' style={{
                        zIndex:'10', position:'absolute', top:0, left:0, paddingLeft:'5% 10%', margin:'0',
                      }}/>
                    </div>
                  </>}
              </Col>
              <Col xs={0} md={6}>
                <img src='http://zetbio.com/theme/zb/img/main/logo-white.png' style={{
                    zIndex:'10', position:'absolute', top:0, left:0, paddingLeft:'5% 10%', margin:'0',
                  }}/>
              </Col>
              <Col xs={0} md={18} >
              <Menu
                        style={{
                        // position:'relative',
                        // top:'10%',
                        color:'white',
                        background:'transparent',
                        opacity:'80%',
                        zIndex:'1000'
                        }}
                        mode="horizontal"
                        items={items}
                />
              </Col>
              {/* <Col xs={0} md={6}>
              <img src='http://zetbio.com/theme/zb/img/main/logo-white.png' style={{
                  zIndex:'10', position:'absolute', top:0, left:0, paddingLeft:'5% 10%', margin:'0',
                }}/>
              </Col>
              <Col xs={0} md={18}>
                  <Menu
                        style={{
                        // position:'relative',
                        // top:'10%',
                        color:'white',
                        background:'transparent',
                        opacity:'80%',
                        zIndex:'1000'
                        }}
                        mode="horizontal"
                        items={items}
                />
              
              </Col> */}
          </Row>
            {children}
            <Footer />
        </>
      );
}

export default AppLayout;