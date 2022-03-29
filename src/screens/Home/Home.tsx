import React from "react";
import Ghostscops from "~/components/Home/Ghostscops";
import Minting from "~/components/Home/Minting";
import Story from "~/components/Home/Story";
import * as Styled from "./Home.style";
const Home = () => {
  return (
    <Styled.Container>
      <Ghostscops />
      <Minting />
      <Story />
    </Styled.Container>
  );
};

export default Home;
