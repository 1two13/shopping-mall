import styled from "styled-components";

const StyledTotalPriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const TotalPriceBoxTitle = styled.div`
  padding-top: 11px;
  font-size: 18px;
`;

const TotalPrice = styled.div`
  display: flex;
  margin-right: 3px;
  font-size: 30px;
  font-weight: 700;
  color: #ff204b;
  div:nth-child(2) {
    margin: 8px 0px 0px 1px;
    font-size: 20px;
    font-weight: 400;
  }
`;

function TotalPriceBox({ totalPrice }) {
  localStorage.setItem("totalPrice", totalPrice);

  return (
    <StyledTotalPriceBox>
      <TotalPriceBoxTitle>총 상품 금액</TotalPriceBoxTitle>
      <TotalPrice>
        <div>{totalPrice}</div>
        <div>원</div>
      </TotalPrice>
    </StyledTotalPriceBox>
  );
}

export default TotalPriceBox;
