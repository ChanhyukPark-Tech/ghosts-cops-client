import React from "react";
import banner from "~/assets/images/Home/Story/banner.webp";
import { GImage } from "~/constants/Common.style";
import { Body2, Header1 } from "~/constants/Typography";
import * as Styled from "./Story.style";
const Story = () => {
  return (
    <Styled.Container id="story" direction="column">
      <Styled.Banner>
        <GImage src={banner} alt="banner" />
      </Styled.Banner>
      <Styled.TextWrapper direction="column">
        <Header1>
          We're the real ones, the people's staff, who find "fake"!
        </Header1>
        <Styled.SubTextWrapper>
          <Body2 alignCenter>
            Our society today is well-organized, rolling like a cogwheel!
            There's an answer on the busy way to work every morning. It's better
            to take a crowded subway than to get stuck in rush hour for regular
            work You have grim faces? No, social life starts with the company
            lobby Hey, you're a little suspicious. Come here. Check! You seem to
            have a lot of thoughts!
          </Body2>
        </Styled.SubTextWrapper>
      </Styled.TextWrapper>
    </Styled.Container>
  );
};

export default Story;
