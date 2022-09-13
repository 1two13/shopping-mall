import { useState } from "react";
import styled from "styled-components";

const MenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 200px;
  font-weight: 500;
  font-size: 20px;
  color: #9a9a9e;
  position: sticky;
  top: 100px;
  overflow: hidden;
  z-index: 999;
  background-color: white;
`;

const Div = styled.div`
  width: 100%;
  text-align: center;
  padding: 17px 4px 22px;
  border-bottom: 4px solid #f2f4f7;
  &.selected {
    border-bottom: 4px solid #202429;
    color: black;
  }
`;

const Description = styled.div`
  margin: 230px 40px 0px 40px;
  font-size: 20px;
`;

const Img = styled.img`
  width: 100%;
  margin: 200px 0px;
`;

function BigDetailsPage({ imageUrl, description }) {
  const [selected, setSelected] = useState(1);

  return (
    <div>
      <MenuBar>
        <Div
          className={selected === 1 ? "selected" : ""}
          onClick={() => setSelected(1)}
        >
          상품정보
        </Div>
        <Div
          className={selected === 2 ? "selected" : ""}
          onClick={() => setSelected(2)}
        >
          리뷰
        </Div>
        <Div
          className={selected === 3 ? "selected" : ""}
          onClick={() => setSelected(3)}
        >
          Q&A
        </Div>
        <Div
          className={selected === 4 ? "selected" : ""}
          onClick={() => setSelected(4)}
        >
          주문정보
        </Div>
      </MenuBar>
      <Description>{description}</Description>
      {imageUrl.map((url, index) => (
        <Img key={index} src={url} />
      ))}
    </div>
  );
}

export default BigDetailsPage;
