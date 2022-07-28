import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Div = styled.div`
  margin-bottom: 30px;
`;

const Img = styled.img`
  width: 95%;
  aspect-ratio: 3 / 3.1;
  cursor: pointer;
`;

const Name = styled.div`
  margin-top: 7px;
  cursor: pointer;
`;

const DetailsBox = styled.div`
  display: flex;
  margin-top: 12px;
  font-size: 20px;
  font-weight: 700;
`;

const Sale = styled.div`
  color: #ff204b;
  margin-right: 7px;
`;

const Price = styled.div``;

function ProductBox() {
  const navigate = useNavigate();

  const moveToProductDetailsPage = () => {
    navigate("/product");
  };

  let name =
    "~2XL[기장선택!!/3Color]뒷밴딩 안단추 클립 찰랑 핀턱 와이드 슬랙스팬츠_복플레이스";

  return (
    <Div>
      <Img
        onClick={moveToProductDetailsPage}
        src="https://image.brandi.me/cproduct/2022/03/07/SB000000000054841182_1646620295_image1_M.jpeg"
      />
      <Name>{name.length < 30 ? name : name.slice(0, 27) + " ..."}</Name>
      <DetailsBox>
        <Sale>10%</Sale>
        <Price>27,540원</Price>
      </DetailsBox>
    </Div>
  );
}

export default ProductBox;