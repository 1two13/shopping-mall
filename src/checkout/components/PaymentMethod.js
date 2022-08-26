import React, { useState } from "react";
import styled from "styled-components";

const PaymentMethodBox = styled.div`
  border-bottom: 1px solid black;
`;

const Title = styled.h2`
  padding-bottom: 10px;
  margin: 130px 0px 20px 0px;
  border-bottom: 1px solid black;
  font-size: 27px;
`;

const NaverPayBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 80px;
`;

const Button = styled.button`
  width: 20%;
  height: 60px;
  // 클릭했을 때
  &.black {
    border: 1px solid #000;
  }
  border: 1px solid #e4e6e9;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
`;

function PaymentMethod() {
  const [clicked, setClicked] = useState(1);

  return (
    <PaymentMethodBox>
      <Title>결제수단</Title>
      <NaverPayBox>
        <Button
          onClick={() => setClicked(1)}
          className={clicked === 1 ? "black" : ""}
        >
          <img src="https://www.brandi.co.kr/static/22.07.01/images/icon_pay_naver.svg" />
        </Button>
        <Button
          onClick={() => setClicked(2)}
          className={clicked === 2 ? "black" : ""}
        >
          신용/체크카드
        </Button>
        <Button
          onClick={() => setClicked(3)}
          className={clicked === 3 ? "black" : ""}
        >
          무통장 입금
        </Button>
        <Button
          onClick={() => setClicked(4)}
          className={clicked === 4 ? "black" : ""}
        >
          휴대폰 결제
        </Button>
      </NaverPayBox>
    </PaymentMethodBox>
  );
}

export default PaymentMethod;
