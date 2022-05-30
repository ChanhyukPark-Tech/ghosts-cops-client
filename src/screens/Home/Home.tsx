import React from "react";
import Ghostscops from "~/components/Home/Ghostscops";
import Minting from "~/components/Home/Minting";
import Story from "~/components/Home/Story";
import Weare from "~/components/Home/Weare";
import * as Styled from "./Home.style";
const Home = () => {
  return (
    <Styled.Container>
      <Ghostscops />
      {/* <Minting /> */}
      <Story />
      <Weare />
    </Styled.Container>
  );
};

export default Home;
