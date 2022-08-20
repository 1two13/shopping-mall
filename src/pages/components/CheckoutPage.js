import React from "react";
import styled from "styled-components";

import OrderInfoBox from "../../checkout/components/OrderInfoBox";
import OrderierInfoBox from "../../checkout/components/OrderierInfoBox";
import DeliveryDesInfoBox from "../../checkout/components/DeliveryDesInfoBox";

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
      {/* <OrderierInfoBox /> */}
      {/* <DeliveryDesInfoBox /> */}
    </StyledCheckoutPage>
  );
}

export default CheckoutPage;
