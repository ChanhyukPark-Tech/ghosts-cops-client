import React from "react";
import { SubTitle3, SubTitle4 } from "~/constants/Typography";
import * as Styled from "./GHeader.style";
import logo from "~/assets/videos/Common/logo.gif";
import { Link } from "react-scroll";
import Colors from "~/constants/Colors";
import { HEADER_HEIGHT } from "~/constants/Variables";
const GHeader = () => {
  return (
    <>
      <Styled.Container>
        <Link to="/" smooth>
          <Styled.LogoWrapper src={logo} alt="logo" round />
        </Link>
        <Styled.NavWrapper>
          <Link to="ghostscops" smooth spy offset={-HEADER_HEIGHT}>
            <SubTitle4>GHOSTSCOPS</SubTitle4>
          </Link>
          <Link to="minting" smooth spy offset={-HEADER_HEIGHT}>
            <SubTitle4>MINTING</SubTitle4>
          </Link>
          <Link to="story" smooth spy>
            <SubTitle4>STORY</SubTitle4>
          </Link>
          <Link to="weare" smooth spy>
            <SubTitle4>WE ARE</SubTitle4>
          </Link>
        </Styled.NavWrapper>
        <Styled.WalletButton>
          <SubTitle3 color={Colors.yellow}>CONNECT WALLET</SubTitle3>
        </Styled.WalletButton>
      </Styled.Container>
      <Styled.EmptyHeader />
    </>
  );
};

export default GHeader;
