import styled from "styled-components";
import BestProductsListBox from "../../common/components/BestProductsListBox";
import ProductsListBox from "../../common/components/ProductsListBox";

const Title = styled.h2`
  margin: 120px 380px 0px 380px;
  font-size: 32px;
  font-weight: 700;
  @media screen and (max-width: 1058px) {
    min-width: 296px;
  }
`;

function HomeProductsList({ layoutListArr }) {
  return (
    <div>
      {layoutListArr.map((layoutList, index) =>
        !layoutList.ranking_layout ? (
          <div key={index}>
            <Title>{layoutList.title}</Title>
            <ProductsListBox productList={layoutList.product_list} />
          </div>
        ) : (
          <div key={index}>
            <Title>{layoutList.title}</Title>
            <BestProductsListBox productList={layoutList.product_list} />
          </div>
        )
      )}
    </div>
  );
}

export default HomeProductsList;
