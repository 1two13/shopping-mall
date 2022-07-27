import styled from "styled-components";

const MenuBarBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 380px 15px 380px;
  a {
    font-weight: 700;
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
