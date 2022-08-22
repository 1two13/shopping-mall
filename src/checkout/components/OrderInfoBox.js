import React from "react";
import styled from "styled-components";

import OrderInfoMainBox from "../../common/components/OrderInfoMainBox";

const Title = styled.h2`
  padding-bottom: 10px;
  border-bottom: 1px solid black;
  font-size: 27px;
`;

const DeliveryType = styled.div`
  padding: 30px 10px;
  border-bottom: 1px solid #e1e1e1;
  font-weight: 600;
  font-size: 23px;
`;

const SmallTitleBox = styled.div`
  display: flex;
  padding: 20px 0px;
  justify-content: right;
  border-bottom: 1px solid #e1e1e1;
  div:nth-child(1) {
    width: 32%;
    text-align: center;
  }
  div:nth-child(2) {
    width: 10%;
    text-align: center;
    margin-right: 60px;
  }
`;

const TotalPrice = styled.div`
  padding-top: 40px;
  justify-content: right;
  border-top: 1px solid black;
  font-size: 26px;
  font-weight: 600;
  display: flex;
  div:nth-child(2) {
    margin-left: 7px;
    color: red;
  }
`;

function OrderInfoBox() {
  console.log(JSON.parse(localStorage.getItem("optionData")));
  return (
    <div>
      <Title>주문상품 정보</Title>
      <DeliveryType>일반배송</DeliveryType>
      <SmallTitleBox>
        <div>쿠폰적용</div>
        <div>주문금액</div>
      </SmallTitleBox>

      {JSON.parse(localStorage.getItem("optionData")).map((index) => {
        console.log(index);
        return <OrderInfoMainBox key={index} optionData={index} />;
      })}

      <TotalPrice>
        <div>총 주문금액</div>
        <div>{localStorage.getItem("totalPrice")}</div>
      </TotalPrice>
    </div>
  );
}

export default OrderInfoBox;
