import React, { useEffect, useState } from "react";
import styled from "styled-components";

import BigAnimatePic from "../../home/components/BigAnimatePic";
import HomeProductsList from "../../home/components/HomeProductsList";

import homePageApi from "../../api/homePageApi";

const Loading = styled.div`
  position: fixed;
  display: grid;
  place-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

function HomePages() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    homePageApi().then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <div>
          <BigAnimatePic imageUrlArr={data.result.banner_list} />
          <HomeProductsList />
        </div>
      )}
    </div>
  );
}

export default HomePages;
