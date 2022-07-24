import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const TopBar = styled.div`
  display: flex;
  margin: 30px 240px 0px 240px;
`;

const MainIconBox = styled.a`
  width: 50%;
`;

const MainIconNm = styled.span`
  margin-left: 7px;
  font-size: 30px;
  color: #f78fb3;
`;

const SearchBox = styled.div`
  top: 20px;
  position: relative;
  width: 30%;
`;

const SearchBoxInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  padding: 0px;
`;

const SearchIcon = styled.div`
  position: absolute;
  font-size: 25px;
  top: -18px;
  right: 28px;
`;

const IconsBox = styled.div`
  display: flex;
  width: 10%;
  margin-left: 52px;
`;

const CartIcon = styled.div`
  margin-right: 25px;
`;

const HeartIcon = styled.div`
  margin-right: 25px;
`;

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
