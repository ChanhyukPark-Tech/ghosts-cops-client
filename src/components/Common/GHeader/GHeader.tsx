import React from "react";
import {
  Body1,
  Body3,
  Body4,
  Body6,
  SubTitle3,
  SubTitle4
} from "~/constants/Typography";
import * as Styled from "./GHeader.style";
import logo from "~/assets/videos/Common/logo.gif";
import { Link } from "react-router-dom";
import Colors from "~/constants/Colors";
const GHeader = () => {
  return (
    <Styled.Container>
      <Styled.LogoWrapper src={logo} alt="logo" round />
      <Styled.NavWrapper>
        <Link to="/">
          <SubTitle4>GHOSTSCOPS</SubTitle4>
        </Link>
        <Link to="/">
          <SubTitle4>MEMORIES</SubTitle4>
        </Link>
        <Link to="/">
          <SubTitle4>STORY</SubTitle4>
        </Link>
        <Link to="/">
          <SubTitle4>WE ARE</SubTitle4>
        </Link>
      </Styled.NavWrapper>
      <Styled.WalletButton>
        <SubTitle3 color={Colors.yellow}>CONNECT WALLET</SubTitle3>
      </Styled.WalletButton>
    </Styled.Container>
  );
};

export default GHeader;
