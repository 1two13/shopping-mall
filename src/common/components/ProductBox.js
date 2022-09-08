import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

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
  width: 96%;
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

function ProductBox({ product }) {
  const navigate = useNavigate();

  const moveToProductDetailsPage = () => {
    navigate("/product");
  };

  return (
    <Div>
      {product !== undefined ? (
        <div>
          <Img onClick={moveToProductDetailsPage} src={product.image_url} />
          <Name>
            {product.name.length > 22
              ? product.name.slice(0, 21) + " ..."
              : product.name}
          </Name>
          <DetailsBox>
            <Sale>{product.discount_rate}%</Sale>
            <Price>{product.discount_price.toLocaleString()}원</Price>
          </DetailsBox>
        </div>
      ) : (
        ""
      )}
    </Div>
  );
}

export default ProductBox;
