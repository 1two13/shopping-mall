import { useEffect, useState } from "react";
import styled from "styled-components";

import CustomSelect from "../../common/components/CustomSelect";
import DetailSelectedBox from "../../common/components/DetailSelectedBox";
import TotalPriceBox from "../../productDetails/components/TotalPriceBox";

const ImgNDetailsBox = styled.div`
  display: flex;
  margin: 20px 380px 15px 380px;
`;

const Img = styled.img`
  width: 48%;
  height: 40%;
  /* aspect-ratio: 1 / 1; */
`;

const DetailsBox = styled.div`
  width: 52%;
  margin-left: 50px;
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
  div:nth-child(2) {
    padding: 7px 0px 0px 2px;
    font-size: 20px;
    font-weight: 400;
  }
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

function ProductDetailsPage() {
  const [design, setDesign] = useState(null);
  const [color, setColor] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  // console.log(selectedOptions);
  const [cnt, setCnt] = useState(0);
  const shouldReset = design !== null && color !== null;

  useEffect(() => {
    // 모든 state 값이 변경되었을 때
    if (shouldReset) {
      // setDesign 함수와 setColor 함수 null로 초기화
      setDesign(null);
      setColor(null);
      setCnt((cnt) => cnt + 1);
    }
  }, [design, color, cnt]);

  let price = 13000;
  let totalPrice = (price * cnt).toLocaleString();
  // price에 천 단위로 콤마 붙이기
  let cPrice = price.toLocaleString();

  return (
    <ImgNDetailsBox>
      <Img src="https://image.brandi.me/cproduct/2022/03/07/SB000000000054841182_1646620295_image1_M.jpeg" />
      <DetailsBox>
        <Title>full bloom 디자인 [아크릴톡]</Title>
        <PriceBox>
          <div>{cPrice}</div>
          <div>원</div>
        </PriceBox>
        <DeliveryBox>
          <div>배송정보</div>
          <div>일반배송</div>
          <FreeShip>무료배송</FreeShip>
        </DeliveryBox>

        <CustomSelect
          label={"[디자인]를 선택하세요."}
          optionData={["스카이레몬", "네이비그린"]}
          onClick={(designText) => {
            // console.log(designText);
            setDesign(designText);
          }}
          shouldReset={shouldReset}
        />

        {design !== null ? (
          <CustomSelect
            label={"[바디색상]를 선택하세요."}
            optionData={["화이트바디"]}
            onClick={(colorText) => {
              setColor(colorText);
              let itemName = `${design}/${colorText}`;
              if (!selectedOptions.includes(itemName)) {
                setSelectedOptions([...selectedOptions, itemName]);
              }
            }}
            shouldReset={shouldReset}
          />
        ) : (
          <CustomSelect
            disabled={true}
            label={"[바디색상]를 선택하세요."}
            optionData={["화이트바디"]}
          />
        )}

        {selectedOptions.map((itemName, index) => {
          return (
            <DetailSelectedBox
              key={index}
              optionData={itemName.split(" ")}
              onRemove={() =>
                setSelectedOptions(
                  selectedOptions.filter(
                    (data) => data !== selectedOptions[index]
                  )
                )
              }
              plusCnt={() => {
                setCnt((cnt) => cnt + 1);
              }}
              minusCnt={() => {
                setCnt((cnt) => cnt - 1);
              }}
            />
          );
        })}

        <TotalPriceBox totalPrice={totalPrice} />
      </DetailsBox>
    </ImgNDetailsBox>
  );
}

export default ProductDetailsPage;
