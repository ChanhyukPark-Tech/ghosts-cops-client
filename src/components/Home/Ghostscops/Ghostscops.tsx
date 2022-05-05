import React from "react";
import * as Styled from "./Ghostscops.style";
import banner from "~/assets/images/Home/Ghostscops/banner.png";
import circleVideo from "~/assets/videos/Home/Ghostscops/circleVideo.webm";
import { GImage } from "~/constants/Common.style";
import GImages from "~/assets/images/Home/Ghostscops";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import OwlCarousel from "react-owl-carousel";
const Ghostscops = () => {
  return (
    <Styled.Container id="ghostscops">
      <Styled.Banner>
        <GImage src={banner} alt="banner" />
      </Styled.Banner>

      <Styled.VideoWrapper>
        <video src={circleVideo} autoPlay muted playsInline loop></video>
      </Styled.VideoWrapper>

      <Styled.CarouselWrapper>
        <OwlCarousel
          autoplay={true}
          items={5}
          loop
          margin={20}
          autoplayTimeout={500}
        >
          {GImages.map((item, index) => (
            <GImage src={item} alt="chat" key={index} />
          ))}
        </OwlCarousel>
      </Styled.CarouselWrapper>
    </Styled.Container>
  );
};

export default Ghostscops;
