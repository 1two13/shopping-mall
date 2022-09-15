import styled from "styled-components";

const MenuBarBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 380px;
  padding-top: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ebeef2;
  /* border: 1px solid red; */
  a {
    font-weight: 700;
    font-size: 17px;
  }
  @media screen and (max-width: 1556px) {
    padding-top: 2px;
  }
`;

function MenuBar() {
  return (
    <MenuBarBox>
      <a>홈</a>
      <a>혜택존</a>
      <a>베스트</a>
      <a>특가</a>
      <a>스토어</a>
    </MenuBarBox>
  );
}

export default MenuBar;
