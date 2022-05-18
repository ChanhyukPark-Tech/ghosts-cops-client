import React from "react";
import Colors from "~/constants/Colors";
import { Header0 } from "~/constants/Typography";
import * as Styled from "./Minting.style";

const Minting = () => {
  
  return (
    <Styled.Container id="minting">
      <Header0 color={Colors.skyblue}>THIS IS MINTING SECTION</Header0>
    </Styled.Container>
  );
};

export default Minting;
