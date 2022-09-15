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
    width: 7%;
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
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [thirdInput, setThirdInput] = useState("");

  const firstInputOnChangeHandler = (e) => {
    // 한글 입력 제한
    e = e.replace(/[^a-zA-Z-_0-9]/g, "");
    setFirstInput(e.slice(0, 3));
  };

  const secondInputOnChangeHandler = (e) => {
    // 한글 입력 제한
    e = e.replace(/[^a-zA-Z-_0-9]/g, "");
    setSecondInput(e.slice(0, 4));
  };

  const thirdInputOnChangeHandler = (e) => {
    // 한글 입력 제한
    e = e.replace(/[^a-zA-Z-_0-9]/g, "");
    setThirdInput(e.slice(0, 4));
  };

  const [info, setInfo] = useState({
    name: "",
    phoneNmStart: "",
    phoneNmMid: "",
    phoneNmEnd: "",
    emailStart: "",
    emailEnd: "",
  });

  const onChangeHandler = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  localStorage.setItem("ordererInfo", JSON.stringify(info));

  return (
    <div>
      <Title>주문자 정보</Title>
      <OrdererBox>
        <SubTitle>이름</SubTitle>
        <Input
          type="text"
          className="name"
          name="name"
          onChange={onChangeHandler}
        />
      </OrdererBox>
      <OrdererBox>
        <SubTitle>휴대폰</SubTitle>
        <Input
          type="number"
          onChange={(e) => {
            firstInputOnChangeHandler(e.target.value);
            onChangeHandler(e);
          }}
          value={firstInput}
          className="phoneNum"
          name="phoneNmStart"
        />
        -
        <Input
          type="number"
          onChange={(e) => {
            secondInputOnChangeHandler(e.target.value);
            onChangeHandler(e);
          }}
          value={secondInput}
          className="phoneNum"
          name="phoneNmMid"
        />
        -
        <Input
          type="number"
          onChange={(e) => {
            thirdInputOnChangeHandler(e.target.value);
            onChangeHandler(e);
          }}
          value={thirdInput}
          className="phoneNum"
          name="phoneNmEnd"
        />
      </OrdererBox>
      <OrdererBox className="emailBox">
        <SubTitle>이메일</SubTitle>
        <Input
          type="email"
          className="email"
          name="emailStart"
          onChange={onChangeHandler}
        />
        @
        <Input
          type="email"
          className="email"
          name="emailEnd"
          onChange={onChangeHandler}
        />
      </OrdererBox>
    </div>
  );
}

export default OrdererInfoBox;
