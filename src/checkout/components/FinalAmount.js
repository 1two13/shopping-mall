import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  padding-bottom: 10px;
  margin: 130px 0px 40px 0px;
  border-bottom: 1px solid black;
  font-size: 27px;
`;

const FinalAmountBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  &.borderBottom {
    border-bottom: 1px solid black;
    padding: 25px 15px 40px 15px;
    font-weight: 700;
    font-size: 26px;
    div:nth-child(2) {
      color: red;
    }
  }
`;

function FinalAmount() {
  let totalPrice = localStorage.getItem("totalPrice");

  return (
    <div>
      <Title>최종 결제 금액</Title>
      <FinalAmountBox>
        <div>총 상품 금액</div>
        <div>{totalPrice}원</div>
      </FinalAmountBox>
      <FinalAmountBox>
        <div>총 배송비</div>
        <div>0원</div>
      </FinalAmountBox>
      <FinalAmountBox className="borderBottom">
        <div>결제 예상 금액</div>
        <div>{totalPrice}원</div>
      </FinalAmountBox>
    </div>
  );
}

export default FinalAmount;
