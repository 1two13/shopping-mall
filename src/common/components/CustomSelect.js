import React, { useState } from "react";
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

const CustomSelect = ({ label, optionData, onClick, disabled }) => {
  const [ShowOptions, setShowOptions] = useState(false);
  const [currentValue, setCurrentValue] = useState(label);

  const handleShowOptions = () => {
    setShowOptions((prev) => !prev);
  };

  const handleSelectedValue = (e) => {
    const { innerText } = e.target;
    // console.log(innerText);
    setCurrentValue(innerText);
    if (onClick) {
      onClick(innerText);
    }
  };

  return (
    <SelectBox
      className={disabled ? "disabled" : ""}
      onClick={handleShowOptions}
    >
      <Label>{currentValue}</Label>
      <SelectOptions show={ShowOptions}>
        {optionData.map((data) => (
          <Option key={data} onClick={handleSelectedValue}>
            {data}
          </Option>
        ))}
      </SelectOptions>
    </SelectBox>
  );
};

export default CustomSelect;
