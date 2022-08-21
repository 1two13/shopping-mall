import { useEffect, useState } from "react";
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

const CntBox = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  border: 1px solid #ebeef2;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  font-size: 18px;
  &.plusBtn {
    line-height: 30px;
  }
`;

const Cnt = styled.div`
  width: 30px;
  height: 30px;
  border-left: 1px solid #ebeef2;
  border-right: 1px solid #ebeef2;
  text-align: center;
  font-size: 18px;
  line-height: 33px;
`;

const PriceBox = styled.div`
  display: flex;
  position: absolute;
  right: 10%;
  top: 45%;
  div:nth-child(1) {
    font-weight: 700;
    font-size: 23px;
  }
  div:nth-child(2) {
    font-size: 14px;
    padding: 8px 0px 0px 1px;
  }
`;

function DetailSelectedBox({ optionData, onRemove, plusCnt, minusCnt }) {
  const [cnt, setCnt] = useState(1);
  // console.log(onRemove); // 선택된 문자열 옵션 데이터가 담긴 배열

  let price = 13000 * cnt;
  // price에 천 단위로 콤마 붙이기
  let cPrice = price.toLocaleString();

  // console.log(optionData, optionData.filter((v) => v));
  // let arr = [];
  // arr.push(optionData);
  // console.log(arr);
  // console.log(optionData);

  const [todo, setTodo] = useState([{ temp: "" }]);
  let [data, setData] = useState(optionData);
  let [newTodo, setNewTodo] = useState({ temp: "" });

  // console.log(optionData);
  // useEffect(() => setNewTodo({ name: inputValue }), [inputValue]);
  // useEffect(() => {
  //   setNewTodo({ temp: data });
  //   window.localStorage.setItem("temp", JSON.stringify(data));
  // }, [data]);

  // console.log(newTodo);

  // useEffect(() => {
  //   window.localStorage.setItem("temp", JSON.stringify(data));
  // }, [data]);

  const onClickMinusCnt = () => {
    setCnt((cnt) => cnt - 1);
    minusCnt();
  };
  const onClickPlusCnt = () => {
    setCnt((cnt) => cnt + 1);
    plusCnt();
  };

  return (
    <Div>
      <SelectedNBtn>
        <SelectedOption>{optionData}</SelectedOption>
        <XButton onClick={onRemove}>X</XButton>
      </SelectedNBtn>
      <CntNPrice>
        <CntBox>
          <Button onClick={onClickMinusCnt}>-</Button>
          <Cnt>{cnt < 1 ? alert("최소 구매 수량은 1개 입니다.") : cnt}</Cnt>
          <Button className={"plusBtn"} onClick={onClickPlusCnt}>
            +
          </Button>
        </CntBox>
        <PriceBox>
          <div>{cPrice}</div>
          <div>원</div>
        </PriceBox>
      </CntNPrice>
    </Div>
  );
}

export default DetailSelectedBox;
