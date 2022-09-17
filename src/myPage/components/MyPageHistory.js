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
  let optionData = JSON.parse(localStorage.getItem("optionData"))[0];

  let today = new Date();
  let year = today.getFullYear();
  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let day = ("0" + today.getDate()).slice(-2);
  let date = `${year}.${month}.${day}`;

  return (
    <div>
      <Title>
        <span>{date}</span>
      </Title>
      <DeliveryType>일반배송</DeliveryType>
      <SmallTitleBox>
        <div>주문금액</div>
        <div>진행상황</div>
      </SmallTitleBox>

      <MainBox>
        <Img src={localStorage.getItem("imageUrl")} />
        <MainBoxInfo>
          <div>{localStorage.getItem("productName")}</div>
          <div>{optionData[0]}</div>
          <div>{optionData[1]}개</div>
        </MainBoxInfo>
        <Price>{optionData[2].toLocaleString()}원</Price>
        <PurchaseStatus>구매확정</PurchaseStatus>
      </MainBox>
    </div>
  );
}

export default MyPageHistory;
