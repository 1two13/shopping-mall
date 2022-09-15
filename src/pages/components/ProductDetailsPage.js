import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import BigDetailsPage from "../../productDetails/components/BigDetailsPage";
import OptionBox from "../../productDetails/components/OptionBox";

import productDetailsPageApi from "../../api/productDetailsPageApi";

const StyledProductDetailsPage = styled.div`
  margin: 20px 380px 15px 380px;
`;

const ImgNDetailsBox = styled.div`
  display: flex;
`;

const Img = styled.img`
  width: 48%;
  height: 40%;
  margin-right: 50px;
  /* aspect-ratio: 1 / 1; */
`;

const DetailsBox = styled.div`
  width: calc(52% - 50px);
  @media screen and (max-width: 1280px) {
    min-width: 683px;
    display: none;
  }
`;

const Title = styled.div`
  margin-top: 25px;
  font-size: 26px;
`;

const PriceBox = styled.div`
  display: flex;
  margin-top: 25px;
  font-size: 30px;
  font-weight: 700;
`;

const DiscountRate = styled.div`
  color: #ff204b;
  margin-right: 7px;
`;

const Won = styled.div`
  padding: 7px 0px 0px 2px;
  font-size: 20px;
  font-weight: 400;
  margin-right: 7px;
`;

const OriginalPrice = styled.div`
  padding: 7px 0px 0px 2px;
  color: #808793;
  font-weight: 400;
  font-size: 20px;
  text-decoration: line-through;
`;

const DeliveryBox = styled.div`
  display: flex;
  width: 100%;
  padding: 22px 0px;
  align-items: center;
  margin-top: 20px;
  border-top: 1px solid #f2f4f7;
  border-bottom: 1px solid #f2f4f7;
  font-size: 17px;
  div:nth-child(1) {
    margin-right: 30px;
  }
  div:nth-child(2) {
    font-weight: 700;
  }
`;

const FreeShip = styled.div`
  margin-left: 8px;
  padding: 6px 8px 3px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 700;
  background-color: #ebeef2;
  color: #808893;
`;

const Loading = styled.div`
  position: fixed;
  display: grid;
  place-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

function ProductDetailsPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const params = useParams();

  useEffect(() => {
    productDetailsPageApi(params).then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let product = data?.result.product;
  let discountPrice =
    product?.price - (product?.discount_rate / 100) * product?.price;

  return (
    <StyledProductDetailsPage>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <div>
          <ImgNDetailsBox>
            <Img src={product.image_url_list[0]} />
            <DetailsBox>
              <Title>{product.name}</Title>

              <PriceBox>
                <DiscountRate>{product.discount_rate}%</DiscountRate>
                <div>{discountPrice.toLocaleString()}</div>
                <Won>원</Won>
                <OriginalPrice>
                  {product.price.toLocaleString()}원
                </OriginalPrice>
              </PriceBox>

              <DeliveryBox>
                <div>배송정보</div>
                <div>일반배송</div>
                <FreeShip>무료배송</FreeShip>
              </DeliveryBox>

              <OptionBox
                option={data.result.option_list}
                price={discountPrice}
              />
            </DetailsBox>
          </ImgNDetailsBox>
          <BigDetailsPage imageUrl={product.image_url_list} />
        </div>
      )}
    </StyledProductDetailsPage>
  );
}

export default ProductDetailsPage;
