import styled from "styled-components";

const ProductsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 42px 380px 80px 380px;
`;

const ProductBox = styled.div`
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
  let name = "full bloom 디자인 [아크릴톡] full bloom 디자인 [아크릴톡]";

  return (
    <ProductsBox>
      <ProductBox>
        <Idx>1</Idx>
        <Img src="https://image.brandi.me/cproduct/2022/03/07/SB000000000054841182_1646620295_image1_M.jpeg" />
        <Name>{name.length < 30 ? name : name.slice(0, 27) + " ..."}</Name>
        <DetailsBox>
          <Sale>10%</Sale>
          <Price>27,540원</Price>
        </DetailsBox>
      </ProductBox>
      <ProductBox>
        <Idx>2</Idx>
        <Img src="https://image.brandi.me/cproduct/2022/03/07/SB000000000054841182_1646620295_image1_M.jpeg" />
        <Name>{name.length < 30 ? name : name.slice(0, 27) + " ..."}</Name>
        <DetailsBox>
          <Sale>10%</Sale>
          <Price>27,540원</Price>
        </DetailsBox>
      </ProductBox>
      <ProductBox>
        <Idx>3</Idx>
        <Img src="https://image.brandi.me/cproduct/2022/03/07/SB000000000054841182_1646620295_image1_M.jpeg" />
        <Name>{name.length < 30 ? name : name.slice(0, 27) + " ..."}</Name>
        <DetailsBox>
          <Sale>10%</Sale>
          <Price>27,540원</Price>
        </DetailsBox>
      </ProductBox>
      <ProductBox>
        <Idx>4</Idx>
        <Img src="https://image.brandi.me/cproduct/2022/03/07/SB000000000054841182_1646620295_image1_M.jpeg" />
        <Name>{name.length < 30 ? name : name.slice(0, 27) + " ..."}</Name>
        <DetailsBox>
          <Sale>10%</Sale>
          <Price>27,540원</Price>
        </DetailsBox>
      </ProductBox>
      <ProductBox>
        <Idx>5</Idx>
        <Img src="https://image.brandi.me/cproduct/2022/03/07/SB000000000054841182_1646620295_image1_M.jpeg" />
        <Name>{name.length < 30 ? name : name.slice(0, 27) + " ..."}</Name>
        <DetailsBox>
          <Sale>10%</Sale>
          <Price>27,540원</Price>
        </DetailsBox>
      </ProductBox>
      <ProductBox>
        <Idx>6</Idx>
        <Img src="https://image.brandi.me/cproduct/2022/03/07/SB000000000054841182_1646620295_image1_M.jpeg" />
        <Name>{name.length < 30 ? name : name.slice(0, 27) + " ..."}</Name>
        <DetailsBox>
          <Sale>10%</Sale>
          <Price>27,540원</Price>
        </DetailsBox>
      </ProductBox>
      <ProductBox>
        <Idx>7</Idx>
        <Img src="https://image.brandi.me/cproduct/2022/03/07/SB000000000054841182_1646620295_image1_M.jpeg" />
        <Name>{name.length < 30 ? name : name.slice(0, 27) + " ..."}</Name>
        <DetailsBox>
          <Sale>10%</Sale>
          <Price>27,540원</Price>
        </DetailsBox>
      </ProductBox>
      <ProductBox>
        <Idx>8</Idx>
        <Img src="https://image.brandi.me/cproduct/2022/03/07/SB000000000054841182_1646620295_image1_M.jpeg" />
        <Name>{name.length < 30 ? name : name.slice(0, 27) + " ..."}</Name>
        <DetailsBox>
          <Sale>10%</Sale>
          <Price>27,540원</Price>
        </DetailsBox>
      </ProductBox>
    </ProductsBox>
  );
}

export default BestProductsListBox;
