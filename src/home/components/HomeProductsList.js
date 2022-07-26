import styled from "styled-components";
import ProductsListBox from "../../common/components/ProductsListBox";

const Title = styled.h2`
  margin: 110px 380px 0px 380px;
  font-size: 32px;
  font-weight: 700;
`;

function HomeProductsList() {
  let name =
    "~2XL[기장선택!!/3Color]뒷밴딩 안단추 클립 찰랑 핀턱 와이드 슬랙스팬츠_복플레이스";

  return (
    <div>
      <Title>오늘은 이 상품 어때요?</Title>
      <ProductsListBox />
      <Title>TODAY 카테고리 베스트</Title>
      <ProductsListBox />
      <Title>신상 모아보기</Title>
      <ProductsListBox />
    </div>
  );
}

export default HomeProductsList;
