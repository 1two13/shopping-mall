import React from "react";
import styled from "styled-components";

import MyPageHistory from "../../myPage/components/MyPageHistory";

const StyledMyPage = styled.div`
  margin: 0px 380px;
`;

const H1 = styled.h1`
  margin-top: 100px;
  font-size: 32px;
  font-weight: 700;
`;

function MyPage() {
  return (
    <StyledMyPage>
      <H1>마이페이지</H1>
      <MyPageHistory />
    </StyledMyPage>
  );
}

export default MyPage;
