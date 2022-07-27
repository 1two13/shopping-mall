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

function ProductsListBox() {
  let name =
    "~2XL[기장선택!!/3Color]뒷밴딩 안단추 클립 찰랑 핀턱 와이드 슬랙스팬츠_복플레이스";

  return (
    <ProductsBox>
      <ProductBox>
        <Img src="https://image.brandi.me/cproduct/2022/03/07/SB000000000054841182_1646620295_image1_M.jpeg" />
        <Name>{name.length < 30 ? name : name.slice(0, 27) + " ..."}</Name>
        <DetailsBox>
          <Sale>10%</Sale>
          <Price>27,540원</Price>
        </DetailsBox>
      </ProductBox>
      <ProductBox>
        <Img src="https://image.brandi.me/cproduct/2022/03/07/SB000000000054841182_1646620295_image1_M.jpeg" />
        <Name>{name.length < 30 ? name : name.slice(0, 27) + " ..."}</Name>
        <DetailsBox>
          <Sale>10%</Sale>
          <Price>27,540원</Price>
        </DetailsBox>
      </ProductBox>
      <ProductBox>
        <Img src="https://image.brandi.me/cproduct/2022/03/07/SB000000000054841182_1646620295_image1_M.jpeg" />
        <Name>{name.length < 30 ? name : name.slice(0, 27) + " ..."}</Name>
        <DetailsBox>
          <Sale>10%</Sale>
          <Price>27,540원</Price>
        </DetailsBox>
      </ProductBox>
      <ProductBox>
        <Img src="https://image.brandi.me/cproduct/2022/03/07/SB000000000054841182_1646620295_image1_M.jpeg" />
        <Name>{name.length < 30 ? name : name.slice(0, 27) + " ..."}</Name>
        <DetailsBox>
          <Sale>10%</Sale>
          <Price>27,540원</Price>
        </DetailsBox>
      </ProductBox>
      <ProductBox>
        <Img src="https://image.brandi.me/cproduct/2022/03/07/SB000000000054841182_1646620295_image1_M.jpeg" />
        <Name>{name.length < 30 ? name : name.slice(0, 27) + " ..."}</Name>
        <DetailsBox>
          <Sale>10%</Sale>
          <Price>27,540원</Price>
        </DetailsBox>
      </ProductBox>
      <ProductBox>
        <Img src="https://image.brandi.me/cproduct/2022/03/07/SB000000000054841182_1646620295_image1_M.jpeg" />
        <Name>{name.length < 30 ? name : name.slice(0, 27) + " ..."}</Name>
        <DetailsBox>
          <Sale>10%</Sale>
          <Price>27,540원</Price>
        </DetailsBox>
      </ProductBox>
      <ProductBox>
        <Img src="https://image.brandi.me/cproduct/2022/03/07/SB000000000054841182_1646620295_image1_M.jpeg" />
        <Name>{name.length < 30 ? name : name.slice(0, 27) + " ..."}</Name>
        <DetailsBox>
          <Sale>10%</Sale>
          <Price>27,540원</Price>
        </DetailsBox>
      </ProductBox>
      <ProductBox>
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

export default ProductsListBox;
