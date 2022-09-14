import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

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
`;

const MainIconBox = styled.a``;

const MainIconNm = styled.span`
  margin-left: 7px;
  font-size: 30px;
  color: #f78fb3;
  cursor: pointer;
`;

const SearchBox = styled.div`
  position: relative;
  top: 20px;
`;

const SearchIcon = styled.div`
  position: absolute;
  top: -18px;
  right: 5px;
  font-size: 25px;
`;

const SearchBoxInput = styled.input`
  border: none;
  border-bottom: 2px solid black;
  padding: 0px;
`;

const IconsBox = styled.div`
  display: flex;
  div {
    padding: 8px 0px 0px 30px;
  }
`;

const MyPageIcon = styled.div`
  cursor: pointer;
`;

function TopFixedBar() {
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
      </MainIconBox>

      <IconsBox>
        <SearchBox>
          <SearchIcon>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </SearchIcon>
          <SearchBoxInput type="text" size="40" />
        </SearchBox>
        <div>
          <FontAwesomeIcon icon={faCartShopping} size="2x" />
        </div>
        <div>
          <FontAwesomeIcon icon={faHeart} size="2x" />
        </div>
        <MyPageIcon>
          <FontAwesomeIcon icon={faUser} size="2x" onClick={moveToMyPage} />
        </MyPageIcon>
      </IconsBox>
    </TopBar>
  );
}

export default TopFixedBar;
