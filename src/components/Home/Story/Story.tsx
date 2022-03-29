import React from "react";
import * as Styled from "./Story.style";
import banner from "~/assets/images/Home/Story/banner.webp";
import { GImage } from "~/constants/Common.style";
const Story = () => {
  return (
    <Styled.Container>
      <Styled.Banner>
        <GImage src={banner} alt="banner" />
      </Styled.Banner>
    </Styled.Container>
  );
};

export default Story;
