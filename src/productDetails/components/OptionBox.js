import { useEffect, useState } from "react";

import CustomSelect from "../../common/components/CustomSelect";
import DetailSelectedBox from "../../common/components/DetailSelectedBox";
import TotalPriceBox from "./TotalPriceBox";
import ButtonBox from "./ButtonBox";

function OptionBox() {
  const [design, setDesign] = useState(null);
  const [color, setColor] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  // console.log(selectedOptions);
  const [cnt, setCnt] = useState(0);
  // console.log(cnt);
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

  return (
    <div>
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

      <ButtonBox
        design={design}
        color={color}
        selectedOptions={selectedOptions}
      />
    </div>
  );
}

export default OptionBox;
