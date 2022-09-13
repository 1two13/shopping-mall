import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "../../common/components/AuthManager";

const StyledButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 60px;
  margin: 30px 1px 0px 1px;
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
    margin-left: 8px;
  }
`;

const CartNHeartBtn = styled.button`
  width: 60px;
  border: 1px solid #e3e5e8;
  border-radius: 5px;
  background-color: white;
  margin-left: 8px;
  &.colored {
    color: red;
    fill: red;
  }
`;

function ButtonBox({ selectedData, option, selectedOptions }) {
  const navigate = useNavigate();
  const [colored, setColored] = useState(false);
  const { token, loginUrl } = useContext(AuthContext);

  const moveToCheckoutPage = () => {
    if (selectedOptions.length > 0) {
      if (token !== null) navigate("/checkout");
      else {
        alert("로그인을 해주세요.");
        window.location.href = loginUrl;
      }
    } else {
      alert(option[selectedData.length].option_title);
    }
  };

  const fillColor = () => {
    setColored((color) => !color);
  };

  return (
    <StyledButtonBox>
      <BuyBtn onClick={moveToCheckoutPage}>바로 구매</BuyBtn>
      <BuyBtn className="Naver" onClick={moveToCheckoutPage}>
        N Pay 구매
      </BuyBtn>
      <CartNHeartBtn>
        <FontAwesomeIcon icon={faCartShopping} size="2x" />
      </CartNHeartBtn>
      <CartNHeartBtn onClick={fillColor} className={colored ? "colored" : ""}>
        <FontAwesomeIcon icon={faHeart} size="2x" />
      </CartNHeartBtn>
    </StyledButtonBox>
  );
}

export default ButtonBox;
