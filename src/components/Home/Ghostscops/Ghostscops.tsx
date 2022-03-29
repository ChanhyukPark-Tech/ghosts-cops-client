import React from "react";
import * as Styled from "./Ghostscops.style";
import banner from "~/assets/images/Home/Ghostscops/banner.png";
import circleVideo from "~/assets/videos/Home/Ghostscops/circleVideo.webm";
import { GImage } from "~/constants/Common.style";
const Ghostscops = () => {
  return (
    <Styled.Container id="ghostscops">
      <Styled.Banner>
        <GImage src={banner} alt="banner" />
      </Styled.Banner>

      <Styled.VideoWrapper>
        <video src={circleVideo} autoPlay muted playsInline loop></video>
      </Styled.VideoWrapper>
    </Styled.Container>
  );
};

export default Ghostscops;
