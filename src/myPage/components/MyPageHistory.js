import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  margin-top: 80px;
  padding-bottom: 10px;
  border-bottom: 4px solid black;
  font-size: 27px;
  font-weight: bolder;
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
    min-width: 15%;
    text-align: center;
  }
  div:nth-child(2) {
    min-width: 15%;
    text-align: center;
    margin-right: 20px;
  }
`;

const MainBox = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  margin-bottom: 120px;
  padding: 18px 10px;
  align-items: center;
`;

const Img = styled.img`
  width: 95px;
  height: 95px;
  aspect-ratio: 1 / 1;
`;

const MainBoxInfo = styled.div`
  width: 80%;
  margin-left: 30px;
  div:nth-child(1) {
    margin-bottom: 15px;
  }
  div:nth-child(2) {
    margin-bottom: 5px;
    color: #9e9e9e;
  }
  div:nth-child(3) {
    color: #9e9e9e;
  }
`;

const Price = styled.div`
  min-width: 14%;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
`;

const PurchaseStatus = styled.div`
  min-width: 17%;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
`;

function MyPageHistory() {
  return (
    <div>
      <Title>
        <span>2022.07.11 </span>|<span> 20220711011960001</span>
      </Title>
      <DeliveryType>일반배송</DeliveryType>
      <SmallTitleBox>
        <div>주문금액</div>
        <div>진행상황</div>
      </SmallTitleBox>

      <MainBox>
        <Img src="https://image.brandi.me/cproduct/2021/09/09/SB000000000023069117_1631181231_image1_S.jpeg" />
        <MainBoxInfo>
          <div>(Pro Hard) 투명 올리 초록이 바나나 에어팟프로 에어팟케이스</div>
          <div>단일상품</div>
          <div>2개</div>
        </MainBoxInfo>
        <Price>21,600원</Price>
        <PurchaseStatus>구매확정</PurchaseStatus>
      </MainBox>
    </div>
  );
}

export default MyPageHistory;
