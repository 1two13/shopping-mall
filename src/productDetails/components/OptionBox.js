import React, { useEffect, useState } from "react";

import CustomSelect from "../../common/components/CustomSelect";
import DetailSelectedBox from "../../common/components/DetailSelectedBox";
import TotalPriceBox from "./TotalPriceBox";
import ButtonBox from "./ButtonBox";

function OptionBox({ option, price }) {
  const [selectedData, setSelectedData] = useState([]); // 현재 선택된 옵션 개수
  const [selectedOptions, setSelectedOptions] = useState([]); // 완성된 아이템 이름
  // console.log(selectedOptions);
  const [cntMap, setCntMap] = useState({});
  // console.log(cntMap);
  const lengthCheck = selectedData.length === option.length;

  useEffect(() => {
    // 모든 옵션 값이 선택되었을 때
    if (lengthCheck) {
      // setSelectedData 함수 초기화
      setSelectedData([]);
    }
  }, [selectedData]);

  let totalCnt = 0;
  // 선택된 총 개수를 구하는 for문
  for (let key in cntMap) {
    totalCnt += cntMap[key];
  }
  // price에 천 단위로 콤마 붙이기
  let totalPrice = (price * totalCnt).toLocaleString();

  useEffect(() => {
    localStorage.setItem(
      "optionData",
      JSON.stringify(
        selectedOptions.map((v) => [v, cntMap[v], price * cntMap[v]])
      )
    );
  }, [selectedOptions, cntMap]);

  return (
    <div>
      {option.map((el, i) => (
        <CustomSelect
          key={i}
          label={el.option_title}
          optionData={el.detail_option_list}
          disabled={selectedData.length < i}
          shouldReset={lengthCheck}
          onClick={(text) => {
            let currentOption = [...selectedData, text];
            setSelectedData(currentOption);
            // console.log(currentOption);

            if (currentOption.length === option.length) {
              let itemName = "";
              currentOption.forEach((v) => (itemName += v + "/"));
              itemName = itemName.slice(0, itemName.length - 1);

              setSelectedOptions([...selectedOptions, itemName]);
              setCntMap((oldCntMap) => ({
                ...oldCntMap,
                [itemName]: 1,
              }));
            }
          }}
        />
      ))}

      {selectedOptions.map((itemName, index) => {
        return (
          <DetailSelectedBox
            key={index}
            optionData={itemName.split(" ")}
            price={price}
            onRemove={() =>
              setSelectedOptions(
                selectedOptions.filter(
                  (data) => data !== selectedOptions[index]
                )
              )
            }
            plusCnt={() => {
              setCntMap((oldCntMap) => ({
                ...oldCntMap,
                [itemName]: oldCntMap[itemName] + 1,
              }));
            }}
            minusCnt={() => {
              setCntMap((oldCntMap) => ({
                ...oldCntMap,
                [itemName]: oldCntMap[itemName] - 1,
              }));
            }}
          />
        );
      })}
      <TotalPriceBox totalPrice={totalPrice} />
      <ButtonBox
        option={option}
        selectedData={selectedData}
        selectedOptions={selectedOptions}
      />
    </div>
  );
}

export default OptionBox;
