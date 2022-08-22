import React from "react";
import styled from "styled-components";

const MainBox = styled.div`
  display: flex;
  border-bottom: 1px solid #e1e1e1;
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

function OrderInfoMainBox({ optionData }) {
  return (
    <MainBox>
      <Img src="https://image.brandi.me/cproduct/2022/03/07/SB000000000054841182_1646620295_image1_M.jpeg" />
      <MainBoxInfo>
        <div>full bloom 디자인 [아크릴톡]</div>
        <div>{optionData}</div>
        {/* 변하는 개수 */}
        <div>1개</div>
      </MainBoxInfo>
      <CouponStatus>적용 가능한 쿠폰이 없습니다.</CouponStatus>
      {/* 개수에 따라 변하는 가격 */}
      <Price>13,000원</Price>
    </MainBox>
  );
}

export default OrderInfoMainBox;
