import React, { useState, useEffect } from "react";
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

function CheckoutPage() {
  const [cnt, setCnt] = useState(1);

  useEffect(() => {
    setCnt((cnt) => cnt + 1);
  }, []);

  const onClickHandler = () => {
    let ordererInfo = JSON.parse(localStorage.getItem("ordererInfo"));
    let deliveryDesInfo = JSON.parse(localStorage.getItem("deliveryDesInfo"));

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
              ordererInfo?.phoneNmStart +
              "-" +
              ordererInfo?.phoneNmMid +
              "-" +
              ordererInfo?.phoneNmEnd,
            email: ordererInfo?.emailStart + "@" + ordererInfo?.emailEnd,
          },
          destination_info: {
            name: deliveryDesInfo?.name,
            phone_number:
              deliveryDesInfo?.phoneNmStart +
              "-" +
              deliveryDesInfo?.phoneNmMid +
              "-" +
              deliveryDesInfo?.phoneNmEnd,
            postal_code: deliveryDesInfo?.postalCode,
            destination_address: deliveryDesInfo?.destinationAddress,
            destination_detail_address:
              deliveryDesInfo?.destinationDetailAddress,
            memo: deliveryDesInfo?.memo,
          },
          product_list: [
            {
              product_id: cnt,
              cnt: cnt,
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
