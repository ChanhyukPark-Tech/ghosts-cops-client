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
          Mr. Misang is building a metaverse virtual world, starting with an
          animation project called « Modern Life is Rubbish » (MLIR). In April
          of this year, he made a plan to show the story before MLIR through the
          avatar project, and shared it with the NFT DAO, « HanDAO ». We
          sympathized with each other's vision and started making 'Ghost
          Project' together. All elements of 'Ghost' were designed by Mr. Misang
          himself in consideration of movement. Both Mr. Misang and the MYTY
          team strongly believe that ‘Avatar' is an alter ego and must be able
          to move at our own will.'
        </Body1>
      </Styled.TextWrapper>
    </Styled.Container>
  );
};

export default Weare;
