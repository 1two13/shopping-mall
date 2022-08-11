import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const StyledButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 60px;
  margin-top: 30px;
`;

const BuyBtn = styled.button`
  width: 200px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  font-weight: 700;
  color: white;
  background-color: #1e1e1e;
  &.Naver {
    background-color: #00c73c;
  }
`;

const CartNHeartBtn = styled.button`
  width: 60px;
  border: 1px solid #e3e5e8;
  border-radius: 5px;
  background-color: white;
`;

function ButtonBox() {
  return (
    <StyledButtonBox>
      <BuyBtn>바로 구매</BuyBtn>
      <BuyBtn className="Naver">N Pay 구매</BuyBtn>
      <CartNHeartBtn>
        <FontAwesomeIcon icon={faCartShopping} size="2x" />
      </CartNHeartBtn>
      <CartNHeartBtn>
        <FontAwesomeIcon icon={faHeart} size="2x" />
      </CartNHeartBtn>
    </StyledButtonBox>
  );
}

export default ButtonBox;
