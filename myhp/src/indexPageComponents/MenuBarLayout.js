import React, { useState, useCallback, useEffect } from 'react';
import { Menu, Row, Col, ConfigProvider, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from '@/reducer/user';
import Link from 'next/link';
import Footer from '@/indexPageComponents/Footer';

const MainBarLayout = ({children}) => {
  const dispatch = useDispatch();
  // const { me } = useSelector((state) => state.user);
    const me = false;
    const [menu, setMenu] = useState(false);
    const onToggleMenuBtn = useCallback(()=>{
        setMenu((prev) => !prev);
    },[]);
    const onLogout = useCallback(()=>{
      dispatch({
        type:LOG_OUT_REQUEST
      })
    },[]);
    const [width, setWidth] = useState(()=>{
      return globalThis.innerWidth <768;
  });
  useEffect(()=>{
      const handleResize = () => {
          setWidth(globalThis.innerWidth < 768);
      }
      window.addEventListener('resize', handleResize);
      return () => {
          window.removeEventListener('resize', handleResize);
      }
  },[]);

  const [isClient, setIsClient] = useState(false);
  useEffect(()=>{
    setIsClient(true);
  },[]);

const items = [
  {
    label: me && isClient &&<Button onClick={onLogout}>관리자페이지 나가기</Button>,
    key: 'admin',
  },{
    // label: width &&<div style={{lineHeight:'30px'}}>문의전화 <br />010-456-789</div>,
    label: width && isClient && <div style={{lineHeight:'30px'}}>문의전화 <br />010-456-789</div>,
    key: 'phone',
  },{
    label: <Link href='/landsearch'>샘플 보기</Link>,
    key: 'search',
  },{
    label: <Link href='/request'>솔루션 소개</Link>,
    key: 'request',
  },{
    label: <Link href='/note'>자주묻는질문</Link>,
    key: 'note',
  },{
    label: <Link href='/intro'>가격안내</Link>,
    key: 'intro',
  },{
    label: <Button style={{ background:'red', color:'white', border: '2px solid silver', borderRadius: '20px' }}>상담신청</Button>
  },{
    label: (!width) && isClient && <Button style={{borderRadius:'15px'}}>문의전화 010-4567-7890</Button>,
    key:'call'
  }
];
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if the current URL matches a specific condition
    if (window.location.href === 'http://127.0.0.1:3000/landsearch') {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, []);

    return (
        <>
            <Row style={{ minHeight:'50px', height:'10vh', position: 'fixed', top:0, left:0, right: 0 }}>
                <Col xs={6}>
                    <div style={{width: '100%', height: '100%', position: 'relative'}}>
                        <Link href='/'>
                          <img src='/img/logo.png' alt='logo' />
                        </Link>
                    </div>
                </Col>
                <Col xs={18} md={0}>
                    <MenuOutlined onClick={onToggleMenuBtn} style={{ float:'right', color:'gray',borderColor:'silver', background:'#fff', border:'1px solid gray',fontSize:'1.2rem', padding:'5px 10px 5px 10px', margin:'10px', borderRadius:'5px'}} />
                </Col>
                { menu && (

                    <ConfigProvider
                    theme={{
                        components: {
                        Menu: {
                            itemHeight:'100'
                        },
                        },
                    }}
                    >
                        <Menu items={items} style={{ position:'fixed',minWidth:'200px', top:0, right:'75vw', left:0, bottom:0, border:'1px solid gray', zIndex:'5000' }} ></Menu>
                        <div style={{ position:'fixed', width:'100vw', top:0, right:0, left:0, bottom:0,
                        backgroundColor:'rgba(0,0,0,0.5)', zIndex:'10'
                      }} onClick={onToggleMenuBtn}></div>
                      </ConfigProvider>
                ) }
                <Col xs={0} md={18}>
                  <Menu mode='horizontal' items={items}>

                  </Menu>
                </Col>
            </Row>
            {children}
            { isVisible ? <Footer /> : null }
        </>
    );
}

export default MainBarLayout;
