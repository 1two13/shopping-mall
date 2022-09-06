import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AnimateBox = styled.div`
  margin: 0px 380px;
  max-height: 570px;
  @media screen and (max-width: 1178px) {
    min-width: 418px;
  }
`;

function BigAnimatePic({ imageUrlArr }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <AnimateBox>
      <Slider {...settings}>
        {imageUrlArr.map((url) => (
          <img key={url.event_id} src={url.image_url} />
        ))}
      </Slider>
    </AnimateBox>
  );
}

export default BigAnimatePic;
