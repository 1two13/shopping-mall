import styled from "styled-components";

const MenuBarBox = styled.div`
  display: flex;
  /* justify-content: space-between; */
  justify-content: space-between;
  padding: 20px 380px 15px 380px;
  /* margin: 20px 380px 15px 380px; */
  border-bottom: 1px solid #ebeef2;
  a {
    font-weight: 700;
    font-size: 17px;
  }
  @media screen and (max-width: 1178px) {
    min-width: 418px;
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
