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

function CheckoutPage() {
  return (
    <StyledCheckoutPage>
      <H1>주문하기</H1>
      <OrderInfoBox />
      <OrdererInfoBox />
      <DeliveryDesInfoBox />
      <FinalAmount />
      <PaymentMethod />
    </StyledCheckoutPage>
  );
}

export default CheckoutPage;
