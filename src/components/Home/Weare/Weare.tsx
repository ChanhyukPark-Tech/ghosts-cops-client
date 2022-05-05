import React from "react";
import * as Styled from "./Weare.style";
import weareText from "~/assets/images/Home/Weare/weareText.webp";
import logo from "~/assets/videos/Common/logo.gif";

import { GImage, SizedBox } from "~/constants/Common.style";
import { Body1, Body3 } from "~/constants/Typography";
const Weare = () => {
  return (
    <Styled.Container id="weare" direction="column">
      <SizedBox height={100} />
      <GImage src={weareText} alt="text" />
      <Styled.Logo src={logo} round />
      <SizedBox height={50} />
      <Styled.TextWrapper>
        <Body1 alignCenter>
          The Ghost Cops Project (GCOPS) is a team of college students inspired
          by Mr. Misang's Ghost Project. The GCOPS team currently consists of
          one web developer, one blockchain developer, and three NFT Product
          Designer and developers.
        </Body1>
      </Styled.TextWrapper>
    </Styled.Container>
  );
};

export default Weare;
