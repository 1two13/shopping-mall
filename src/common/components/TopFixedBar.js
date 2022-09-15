import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const TopBar = styled.div`
  display: flex;
  position: sticky;
  align-items: center;
  justify-content: space-between;
  margin: 0px 380px;
  top: 0;
  height: 100px;
  z-index: 999;
  background-color: white;
  @media screen and (max-width: 1556px) {
    flex-direction: column;
    background-color: white;
    margin-top: 32px;
    align-items: flex-start;
    position: relative;
  }
`;

const MainIconBox = styled.a`
  min-width: 35%;
`;

const MainIconNm = styled.span`
  margin-left: 7px;
  font-size: 30px;
  color: #f78fb3;
  cursor: pointer;
`;

const Hamburger = styled.div`
  cursor: pointer;
  @media screen and (min-width: 1556px) {
    display: none;
  }
  @media screen and (max-width: 1556px) {
    position: absolute;
    top: 0px;
    right: 0px;
    background-color: white;
  }
`;

const SearchBox = styled.div`
  position: relative;
  top: 20px;
  margin-bottom: 20px;
`;

const SearchIcon = styled.div`
  position: absolute;
  top: -18px;
  right: 5px;
  font-size: 25px;
`;

const SearchBoxInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 2px solid black;
  padding: 0px;
`;

const IconsBox = styled.div`
  display: flex;
  justify-content: flex-end;
  min-width: 25%;
  div {
    padding: 10px 0px 10px 30px;
  }
  @media screen and (max-width: 1556px) {
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 100%;
    padding-bottom: 32px;
    display: ${(props) => (props.show ? "flex" : "none")};
  }
`;

const Icon = styled.div`
  cursor: pointer;
  @media screen and (max-width: 1556px) {
    :hover {
      background-color: rgb(255, 191, 212, 0.3);
      width: 100%;
      text-align: center;
      align-items: center;
    }
  }
`;

function TopFixedBar() {
  const [show, setShow] = useState(false);

  const showMenu = () => {
    setShow((show) => !show);
  };

  const navigate = useNavigate();

  const moveToHomePage = () => {
    navigate("/");
  };

  const moveToMyPage = () => {
    navigate("/myPage");
  };

  return (
    <TopBar>
      <MainIconBox>
        <FontAwesomeIcon icon={faBasketShopping} size="2x" color="#f78fb3" />
        <MainIconNm onClick={moveToHomePage}>G O G O S H O P</MainIconNm>
        <Hamburger>
          <FontAwesomeIcon icon={faBars} size="2x" onClick={showMenu} />
        </Hamburger>
      </MainIconBox>

      <IconsBox show={show}>
        <SearchBox>
          <SearchIcon>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </SearchIcon>
          <SearchBoxInput type="text" size="40" />
        </SearchBox>
        <Icon>
          <FontAwesomeIcon icon={faCartShopping} size="2x" />
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faHeart} size="2x" />
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faUser} size="2x" onClick={moveToMyPage} />
        </Icon>
      </IconsBox>
    </TopBar>
  );
}

export default TopFixedBar;
