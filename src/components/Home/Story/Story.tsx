import React from "react";
import * as Styled from "./Story.style";
import banner from "~/assets/images/Home/Story/banner.webp";
import { GImage } from "~/constants/Common.style";
import { Body2, Body4, Header0 } from "~/constants/Typography";
const Story = () => {
  return (
    <Styled.Container id="story" direction="column">
      <Styled.Banner>
        <GImage src={banner} alt="banner" />
      </Styled.Banner>
      <Styled.TextWrapper direction="column">
        <Header0>WHAT HAPPENED BEFORE THESE STORIES?</Header0>
        <Styled.SubTextWrapper>
          <Body2 alignCenter>
            Before the series ‘Modern life is Rubbish’ by Mr.Misang. The story
            of when the world was more colorful than today. In unknown dark
            space, a black portal opened. We succeeded in contacting the ghosts
            of long-dead people. Why do all citizens in 'Modern Life is Rubbish'
            look similar? Was this world like this from the beginning? Let's
            call out ghosts, revive memories, and be possessed.
          </Body2>
        </Styled.SubTextWrapper>
      </Styled.TextWrapper>
    </Styled.Container>
  );
};

export default Story;
