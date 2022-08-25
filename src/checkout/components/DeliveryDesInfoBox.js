import React, { useState } from "react";
import styled from "styled-components";

const Title = styled.h2`
  padding-bottom: 10px;
  margin-top: 130px;
  border-bottom: 1px solid black;
  font-size: 27px;
`;

const DeliveryDesBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid #e1e1e1;
  &.memo {
    border-bottom: 1px solid black;
  }
`;

const SubTitle = styled.div`
  width: 20%;
  font-weight: 700;
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
    width: 5%;
    text-align: center;
  }
  &.des {
    width: 45%;
  }
`;

const DesInput = styled.div`
  width: 80%;
`;

const SecondInputBox = styled.div`
  display: flex;
`;

const DesMemo = styled.div`
  font-size: 13px;
  margin: 11px 0px 3px 5px;
  color: #9e9e9e;
`;

const Select = styled.select`
  width: 25%;
  margin: 3px 5px;
  padding: 13px 0px 13px 18px;
  border: none;
  color: #8d8d8d;
  :focus {
    outline: none;
  }
  appearance: none; // 기본 화살표 제거
  background: url("https://www.brandi.co.kr/static/22.07.01/images/ic-arrow-bl-down@3x.png")
    no-repeat 95% 50%;
  background-size: 13px;
  background-color: #f5f5f5;
`;

function DeliveryDesInfoBox() {
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

  return (
    <div>
      <Title>배송지 정보</Title>
      <DeliveryDesBox>
        <SubTitle>수령인</SubTitle>
        <Input type="text" className="name" />
      </DeliveryDesBox>
      <DeliveryDesBox>
        <SubTitle>휴대폰</SubTitle>
        <Input
          type="number"
          onChange={(e) => firstInputOnChangeHandler(e.target.value)}
          value={firstInput}
          className="phoneNum"
        />
        -
        <Input
          type="number"
          onChange={(e) => secondInputOnChangeHandler(e.target.value)}
          value={secondInput}
          className="phoneNum"
        />
        -
        <Input
          type="number"
          onChange={(e) => thirdInputOnChangeHandler(e.target.value)}
          value={thirdInput}
          className="phoneNum"
        />
      </DeliveryDesBox>
      <DeliveryDesBox>
        <SubTitle>배송주소</SubTitle>
        <DesInput>
          <Input type="text" className="des" />
          <SecondInputBox>
            <Input type="text" className="des" />
            <Input type="text" className="des" />
          </SecondInputBox>
          <DesMemo>
            * 제주도, 도서 산간 지역 등은 배송이 하루 이상 추가 소요될 수
            있습니다
          </DesMemo>
        </DesInput>
      </DeliveryDesBox>
      <DeliveryDesBox className="memo">
        <SubTitle>배송메모</SubTitle>
        <Select>
          <option>배송 시 요청사항을 선택해주세요</option>
          <option>문 앞에 놓아주세요.</option>
          <option>경비(관리)실에 맡겨 주세요.</option>
          <option>택배함에 넣어주세요.</option>
          <option>직접 받겠습니다.</option>
        </Select>
      </DeliveryDesBox>
    </div>
  );
}

export default DeliveryDesInfoBox;
