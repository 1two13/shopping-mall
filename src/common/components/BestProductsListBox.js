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

const Img = styled.img`
  width: 95%;
  aspect-ratio: 3 / 3.1;
`;

const Name = styled.div`
  margin-top: 7px;
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
