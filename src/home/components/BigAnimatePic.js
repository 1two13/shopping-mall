import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AnimateBox = styled.div`
  margin: 0px 380px;
  max-height: 570px;
`;

function BigAnimatePic() {
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
        <img src="https://image.brandi.me/home/banner/bannerImage_810475_1658387802.jpg" />
        <img src="https://image.brandi.me/home/banner/bannerImage_810477_1658387802.jpg" />
        <img src="https://image.brandi.me/home/banner/bannerImage_810478_1658387803.jpg" />
        <img src="https://image.brandi.me/home/banner/bannerImage_810481_1658387803.jpg" />
        <img src="https://image.brandi.me/home/banner/bannerImage_810480_1658387803.jpg" />
        <img src="https://image.brandi.me/home/banner/bannerImage_810718_1658451694.jpg" />
      </Slider>
    </AnimateBox>
  );
}

export default BigAnimatePic;
