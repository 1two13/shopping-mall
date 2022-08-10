import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SelectBox = styled.div`
  position: relative;
  padding: 20px;
  margin: 20px 0px -12px 0px;
  border-radius: 5px;
  border: 1px solid #f2f4f7;
  cursor: pointer;
  &::before {
    content: "⌵";
    position: absolute;
    top: 15px;
    right: 25px;
    font-size: 20px;
  }
  &.disabled {
    pointer-events: none;
    color: #c5c5c5;
  }
`;

const Label = styled.label`
  margin-left: 2px;
  font-size: 16px;
`;

const SelectOptions = styled.ul`
  position: absolute;
  top: 57px;
  left: 0;
  width: 100%;
  max-height: ${(props) => (props.show ? "none" : "0")};
  z-index: 999;
  overflow: hidden;
  border-radius: 5px;
  background-color: white;
`;

const Option = styled.li`
  padding: 20px;
  border: 1px solid;
  border-radius: 5px;
  border-color: transparent #f2f4f7 #f2f4f7 #f2f4f7;
  font-size: 16px;
`;

function CustomSelect({ label, optionData, onClick, disabled, shouldReset }) {
  const [showOptions, setShowOptions] = useState(false);
  const [currentValue, setCurrentValue] = useState(label);

  const handleShowOptions = () => {
    setShowOptions((prev) => !prev);
  };

  const handleSelectedValue = (e) => {
    // console.log(e.target);
    setCurrentValue(e.target.innerText);
    if (onClick) {
      onClick(e.target.innerText);
    }
  };

  useEffect(() => {
    // 모든 state 값이 변경되었을 때, 즉 design 과 color 값이 null 이 아닐 때
    if (shouldReset) {
      // label 값 보여주기
      setCurrentValue(label);
    }
  }, [shouldReset]);

  return (
    <SelectBox
      className={disabled ? "disabled" : ""}
      onClick={handleShowOptions}
    >
      <Label>{currentValue}</Label>
      <SelectOptions show={showOptions}>
        {optionData.map((data) => (
          <Option key={data} onClick={handleSelectedValue}>
            {data}
          </Option>
        ))}
      </SelectOptions>
    </SelectBox>
  );
}

export default CustomSelect;
