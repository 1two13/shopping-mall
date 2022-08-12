import styled from "styled-components";
import ProductBox from "./ProductBox";

const ProductsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 42px 380px 80px 380px;
`;

const Box = styled.div`
  margin-bottom: 30px;
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

function BestProductsListBox() {
  return (
    <ProductsBox>
      <Box>
        <Idx>1</Idx>
        <ProductBox />
      </Box>
      <Box>
        <Idx>2</Idx>
        <ProductBox />
      </Box>
      <Box>
        <Idx>3</Idx>
        <ProductBox />
      </Box>
      <Box>
        <Idx>4</Idx>
        <ProductBox />
      </Box>
      <Box>
        <Idx>5</Idx>
        <ProductBox />
      </Box>
      <Box>
        <Idx>6</Idx>
        <ProductBox />
      </Box>
      <Box>
        <Idx>7</Idx>
        <ProductBox />
      </Box>
      <Box>
        <Idx>8</Idx>
        <ProductBox />
      </Box>
    </ProductsBox>
  );
}

export default BestProductsListBox;
