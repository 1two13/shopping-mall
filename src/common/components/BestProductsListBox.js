import styled from "styled-components";
import ProductBox from "./ProductBox";

const ProductsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 42px 380px 80px 380px;
`;

const Box = styled.div`
  margin-bottom: 30px;
  overflow: hidden;
`;

const Idx = styled.div`
  position: absolute;
  width: 32px;
  height: 40px;
  background-color: black;
  border-bottom-right-radius: 20px;
  color: white;
  text-align: center;
  line-height: 40px;
`;

function BestProductsListBox({ productList }) {
  return (
    <ProductsBox>
      {productList.map((product, index) => (
        <Box key={index}>
          <Idx>{index + 1}</Idx>
          <ProductBox product={product} />
        </Box>
      ))}
    </ProductsBox>
  );
}

export default BestProductsListBox;
