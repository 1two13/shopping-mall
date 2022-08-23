import React, { useState } from "react";
import styled from "styled-components";

const Title = styled.h2`
  padding-bottom: 10px;
  margin-top: 130px;
  border-bottom: 1px solid black;
  font-size: 27px;
`;

const OrdererBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid #e1e1e1;
  &.emailBox {
    border-bottom: 1px solid black;
  }
`;

const Input = styled.input`
  margin: 3px 5px;
  padding: 13px;
  border: none;
  background: #f5f5f5;
  color: #8d8d8d;
  :focus {
    outline: none;
  }
  // type을 number로 설정했을 때 생기는 증감 아이콘
  ::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  &.name {
    width: 77%;
  }
  &.phoneNum {
    width: 4%;
    text-align: center;
  }
  &.email {
    width: 20%;
  }
`;

const SubTitle = styled.div`
  width: 20%;
  font-weight: 700;
`;

function OrdererInfoBox() {
  const [phoneInput, setPhoneInput] = useState("");

  const onChange = (e, maxLength) => {
    // 한글 입력 제한
    e = e.replace(/[^a-zA-Z-_0-9]/g, "");
    setPhoneInput(e.slice(0, maxLength));
  };

  return (
    <div>
      <Title>주문자 정보</Title>
      <OrdererBox>
        <SubTitle>이름</SubTitle>
        <Input type="text" className="name" />
      </OrdererBox>
      <OrdererBox>
        <SubTitle>휴대폰</SubTitle>
        <Input
          type="number"
          onChange={(e) => onChange(e.target.value, 3)}
          value={phoneInput}
          className="phoneNum"
        />
        -
        <Input type="tel" className="phoneNum" maxLength="4" />
        -
        <Input type="tel" className="phoneNum" maxLength="4" />
      </OrdererBox>
      <OrdererBox className="emailBox">
        <SubTitle>이메일</SubTitle>
        <Input type="email" className="email" />
        @
        <Input type="email" className="email" />
      </OrdererBox>
    </div>
  );
}

export default OrdererInfoBox;
