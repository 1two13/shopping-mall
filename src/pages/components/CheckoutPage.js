import React from "react";
import styled from "styled-components";

import OrderInfoBox from "../../checkout/components/OrderInfoBox";
import OrdererInfoBox from "../../checkout/components/OrdererInfoBox";
import DeliveryDesInfoBox from "../../checkout/components/DeliveryDesInfoBox";
import FinalAmount from "../../checkout/components/FinalAmount";
import PaymentMethod from "../../checkout/components/PaymentMethod";

const StyledCheckoutPage = styled.div`
  margin: 20px 380px 15px 380px;
`;

const H1 = styled.h1`
  margin: 110px 0px;
  text-align: center;
  font-size: 30px;
  font-weight: 400;
`;

const Div = styled.div`
  text-align: center;
`;

const Button = styled.button`
  width: 270px;
  height: 80px;
  margin: 90px 0px 100px 0px;
  border: none;
  font-size: 20px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

let ordererInfo = JSON.parse(localStorage.getItem("ordererInfo"));

function CheckoutPage() {
  const onClickHandler = () => {
    fetch(
      "http://ec2-54-180-89-108.ap-northeast-2.compute.amazonaws.com/orders",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          user_info: {
            name: ordererInfo?.name,
            phone_number:
              ordererInfo.phoneNmStart +
              "-" +
              ordererInfo.phoneNmMid +
              "-" +
              ordererInfo.phoneNmEnd,
            email: ordererInfo.emailStart + "@" + ordererInfo.emailEnd,
          },
          destination_info: {
            name: "뚱땅마을관리자",
            phone_number: "010-1234-5678",
            postal_code: "08288",
            destination_address: "서울시",
            destination_detail_address: "아파트",
            memo: "문앞에 놔주세요.",
          },
          product_list: [
            {
              product_id: 1,
              cnt: 1,
            },
          ],
        }),
      }
    ).then((res) => res.json());
  };

  return (
    <StyledCheckoutPage>
      <H1>주문하기</H1>
      <OrderInfoBox />
      <OrdererInfoBox />
      <DeliveryDesInfoBox />
      <FinalAmount />
      <PaymentMethod />
      <Div>
        <Button onClick={onClickHandler}>결제하기</Button>
      </Div>
    </StyledCheckoutPage>
  );
}

export default CheckoutPage;
