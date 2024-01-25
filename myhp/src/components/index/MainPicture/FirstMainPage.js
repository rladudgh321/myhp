const FirstMainPage = () => {
  return (
    <>
      <div className='content'
        style={{
          position:'absolute', top:'30%', width:'100%',
          textAlign:'center',
          padding:'0 30px'
        }}
      >
        <div style={{ display:'flex', justifyContent:'center'}}>
          <img src='http://zetbio.com/theme/zb/img/main/anylab-lg-covid-w2.png'
            style={{
              height:'145px', verticalAlign:'middle', display:'block',

            }}
          />
        </div>
        <p
          style={{
            color:'white',
            position:'relative',
            margin:'0 auto'
          }}
        >COVID-19 팬데믹에서 생명의 소중함을 제트바이오텍의 혁신적인 기술 솔루션을 통해 회복하고자 합니다</p>
      </div>    
    </>
  );
}

export default FirstMainPage;
