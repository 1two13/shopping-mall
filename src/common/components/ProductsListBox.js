import styled from "styled-components";

const ProductsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 42px 380px 80px 380px;
`;

const ProductBox = styled.div`
  margin-bottom: 30px;
`;

const Img = styled.img`
  width: 278px;
  height: 305px;
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
        <Img src="https://mblogthumb-phinf.pstatic.net/MjAxOTA4MjZfMTYx/MDAxNTY2Nzk0MTY3Mzc4.81TTXc-t017CH979nJRGPOOAlxrf6RYbqpvictp3f9Ug.iIKSUj1gMxwMGPgtsmPruX-9FrBHO9bY5cdvVHbprBMg.JPEG.kyk123147/KakaoTalk_20190826_100126816_14.jpg?type=w800" />
        <Name>{name.length < 30 ? name : name.slice(0, 27) + " ..."}</Name>
        <DetailsBox>
          <Sale>10%</Sale>
          <Price>27,540원</Price>
        </DetailsBox>
      </ProductBox>
      <ProductBox>
        <Img src="https://mblogthumb-phinf.pstatic.net/MjAxOTA4MjZfMTYx/MDAxNTY2Nzk0MTY3Mzc4.81TTXc-t017CH979nJRGPOOAlxrf6RYbqpvictp3f9Ug.iIKSUj1gMxwMGPgtsmPruX-9FrBHO9bY5cdvVHbprBMg.JPEG.kyk123147/KakaoTalk_20190826_100126816_14.jpg?type=w800" />
        <Name>{name.length < 30 ? name : name.slice(0, 27) + " ..."}</Name>
        <DetailsBox>
          <Sale>10%</Sale>
          <Price>27,540원</Price>
        </DetailsBox>
      </ProductBox>
      <ProductBox>
        <Img src="https://mblogthumb-phinf.pstatic.net/MjAxOTA4MjZfMTYx/MDAxNTY2Nzk0MTY3Mzc4.81TTXc-t017CH979nJRGPOOAlxrf6RYbqpvictp3f9Ug.iIKSUj1gMxwMGPgtsmPruX-9FrBHO9bY5cdvVHbprBMg.JPEG.kyk123147/KakaoTalk_20190826_100126816_14.jpg?type=w800" />
        <Name>{name.length < 30 ? name : name.slice(0, 27) + " ..."}</Name>
        <DetailsBox>
          <Sale>10%</Sale>
          <Price>27,540원</Price>
        </DetailsBox>
      </ProductBox>
      <ProductBox>
        <Img src="https://mblogthumb-phinf.pstatic.net/MjAxOTA4MjZfMTYx/MDAxNTY2Nzk0MTY3Mzc4.81TTXc-t017CH979nJRGPOOAlxrf6RYbqpvictp3f9Ug.iIKSUj1gMxwMGPgtsmPruX-9FrBHO9bY5cdvVHbprBMg.JPEG.kyk123147/KakaoTalk_20190826_100126816_14.jpg?type=w800" />
        <Name>{name.length < 30 ? name : name.slice(0, 27) + " ..."}</Name>
        <DetailsBox>
          <Sale>10%</Sale>
          <Price>27,540원</Price>
        </DetailsBox>
      </ProductBox>
      <ProductBox>
        <Img src="https://mblogthumb-phinf.pstatic.net/MjAxOTA4MjZfMTYx/MDAxNTY2Nzk0MTY3Mzc4.81TTXc-t017CH979nJRGPOOAlxrf6RYbqpvictp3f9Ug.iIKSUj1gMxwMGPgtsmPruX-9FrBHO9bY5cdvVHbprBMg.JPEG.kyk123147/KakaoTalk_20190826_100126816_14.jpg?type=w800" />
        <Name>{name.length < 30 ? name : name.slice(0, 27) + " ..."}</Name>
        <DetailsBox>
          <Sale>10%</Sale>
          <Price>27,540원</Price>
        </DetailsBox>
      </ProductBox>
      <ProductBox>
        <Img src="https://mblogthumb-phinf.pstatic.net/MjAxOTA4MjZfMTYx/MDAxNTY2Nzk0MTY3Mzc4.81TTXc-t017CH979nJRGPOOAlxrf6RYbqpvictp3f9Ug.iIKSUj1gMxwMGPgtsmPruX-9FrBHO9bY5cdvVHbprBMg.JPEG.kyk123147/KakaoTalk_20190826_100126816_14.jpg?type=w800" />
        <Name>{name.length < 30 ? name : name.slice(0, 27) + " ..."}</Name>
        <DetailsBox>
          <Sale>10%</Sale>
          <Price>27,540원</Price>
        </DetailsBox>
      </ProductBox>
      <ProductBox>
        <Img src="https://mblogthumb-phinf.pstatic.net/MjAxOTA4MjZfMTYx/MDAxNTY2Nzk0MTY3Mzc4.81TTXc-t017CH979nJRGPOOAlxrf6RYbqpvictp3f9Ug.iIKSUj1gMxwMGPgtsmPruX-9FrBHO9bY5cdvVHbprBMg.JPEG.kyk123147/KakaoTalk_20190826_100126816_14.jpg?type=w800" />
        <Name>{name.length < 30 ? name : name.slice(0, 27) + " ..."}</Name>
        <DetailsBox>
          <Sale>10%</Sale>
          <Price>27,540원</Price>
        </DetailsBox>
      </ProductBox>
      <ProductBox>
        <Img src="https://mblogthumb-phinf.pstatic.net/MjAxOTA4MjZfMTYx/MDAxNTY2Nzk0MTY3Mzc4.81TTXc-t017CH979nJRGPOOAlxrf6RYbqpvictp3f9Ug.iIKSUj1gMxwMGPgtsmPruX-9FrBHO9bY5cdvVHbprBMg.JPEG.kyk123147/KakaoTalk_20190826_100126816_14.jpg?type=w800" />
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
