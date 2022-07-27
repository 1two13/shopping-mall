import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const TopBar = styled.div`
  display: flex;
  margin: 0px 380px;
  position: sticky;
  top: 0;
  height: 100px;
  z-index: 999;
  align-items: center;
  background-color: white;
`;

const MainIconBox = styled.a`
  width: 60%;
`;

const MainIconNm = styled.span`
  margin-left: 7px;
  font-size: 30px;
  color: #f78fb3;
`;

const SearchBox = styled.div`
  position: relative;
  width: 25%;
  top: 20px;
`;

const SearchBoxInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid black;
  padding: 0px;
`;

const SearchIcon = styled.div`
  position: absolute;
  top: -18px;
  right: 5px;
  font-size: 25px;
`;

const IconsBox = styled.div`
  display: flex;
  width: 15%;
  justify-content: space-between;
  margin-left: 60px;
  min-width: 165px;
  padding: 0px 5px 0px 5px;
`;

const CartIcon = styled.div``;

const HeartIcon = styled.div``;

const MyPageIcon = styled.div``;

function TopFixedBar() {
  return (
    <TopBar>
      <MainIconBox>
        <FontAwesomeIcon icon={faBasketShopping} size="2x" color="#f78fb3" />
        <MainIconNm>G O G O S H O P</MainIconNm>
      </MainIconBox>
      <SearchBox>
        <SearchIcon>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchIcon>
        <SearchBoxInput type="text" size="40" />
      </SearchBox>
      <IconsBox>
        <CartIcon>
          <FontAwesomeIcon icon={faCartShopping} size="2x" />
        </CartIcon>
        <HeartIcon>
          <FontAwesomeIcon icon={faHeart} size="2x" />
        </HeartIcon>
        <MyPageIcon>
          <FontAwesomeIcon icon={faUser} size="2x" />
        </MyPageIcon>
      </IconsBox>
    </TopBar>
  );
}

export default TopFixedBar;
