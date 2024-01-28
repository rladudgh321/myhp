import { List, Button } from "antd";

const Living = ({items, title}) => {
  return (
    <List
        header={<div style={{ textAlign:'initial', fontWeight:'bold', fontSize:'1.2rem', maxWidth:'1110px', maxHeight:'1760px', margin: '0 auto' }}>{title}</div>}
        grid={{ md: 4, sm: 2, xs:2 }}
        bordered
        dataSource={items}
        renderItem={({image}) => {
          return (
          <List.Item>
            <div className="living">
              <img width={200} src={image.src} />
              <br />
              <Button.Group>
                <Button>pc화면</Button>
                <Button>모바일</Button>
              </Button.Group>
              <br />
            </div>
          </List.Item>
          )
        }}
      >
      </List>
  );
}

export default Living;