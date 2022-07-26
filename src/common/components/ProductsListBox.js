import React from "react";
import styled from "styled-components";

import ProductBox from "./ProductBox";

const ProductsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 42px 380px 80px 380px;
`;

function ProductsListBox({ productList }) {
  return (
    <ProductsBox>
      {productList.map((product) => (
        <ProductBox key={product.product_id} product={product} />
      ))}
    </ProductsBox>
  );
}

export default ProductsListBox;
