import React from "react";
import styled from "styled-components";

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

const MainBox = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  padding: 18px 10px;
  align-items: center;
`;

const Img = styled.img`
  width: 95px;
  height: 95px;
  aspect-ratio: 1 / 1;
`;

const MainBoxInfo = styled.div`
  width: 50%;
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

const CouponStatus = styled.div`
  width: 40%;
  text-align: center;
  color: #9e9e9e;
  font-size: 19px;
`;

const Price = styled.div`
  width: 10%;
  text-align: center;
  margin-right: 60px;
  font-weight: 600;
`;

const TotalPrice = styled.div`
  margin-top: 40px;
  float: right;
  font-size: 26px;
  font-weight: 600;
  span:nth-child(1) {
    margin-left: 7px;
    color: red;
  }
`;

function OrderInfoBox() {
  return (
    <div>
      <Title>주문상품 정보</Title>
      <DeliveryType>일반배송</DeliveryType>
      <SmallTitleBox>
        <div>쿠폰적용</div>
        <div>주문금액</div>
      </SmallTitleBox>
      <MainBox>
        <Img src="https://image.brandi.me/cproduct/2022/03/07/SB000000000054841182_1646620295_image1_M.jpeg" />
        <MainBoxInfo>
          <div>full bloom 디자인 [아크릴톡]</div>
          <div>스카이레몬/화이트바디</div>
          <div>1개</div>
        </MainBoxInfo>
        <CouponStatus>적용 가능한 쿠폰이 없습니다.</CouponStatus>
        <Price>13,000원</Price>
      </MainBox>
      <TotalPrice>
        총 주문금액
        <span>13,000원</span>
      </TotalPrice>
    </div>
  );
}

export default OrderInfoBox;
