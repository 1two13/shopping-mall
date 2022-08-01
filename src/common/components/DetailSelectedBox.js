import styled from "styled-components";

const Div = styled.div`
  margin-top: 25px;
  background-color: #f5f6f6;
  height: 64px;
  padding: 20px;
  border-radius: 5px;
  position: relative;
`;

const SelectedNBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SelectedOption = styled.div`
  /* position: absolute;
  top: 30%; */
`;

const XButton = styled.button`
  border: none;
  background-color: #f5f6f6;
  color: #d9d9d9;
  font-size: 15px;
`;

const CntNPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-top: 10px;
  position: absolute;
  top: 40%;
`;

const Cnt = styled.div`
  display: flex;
`;

const Price = styled.div`
  display: flex;
  position: absolute;
  right: 10%;
`;

const Button = styled.button``;

function DetailSelectedBox({ optionData }) {
  let price = 27540;
  // price에 천 단위로 콤마 붙이기
  let CPrice = price.toLocaleString();

  // console.log(optionData, optionData.filter((v) => v));

  return (
    <Div>
      <SelectedNBtn>
        <SelectedOption>{optionData.filter((v) => v).join("/")}</SelectedOption>
        <XButton>X</XButton>
      </SelectedNBtn>
      <CntNPrice>
        <Cnt>
          <Button>-</Button>
          <div>1</div>
          <Button>+</Button>
        </Cnt>
        <Price>
          <div>{CPrice}</div>
          <div>원</div>
        </Price>
      </CntNPrice>
    </Div>
  );
}

export default DetailSelectedBox;
