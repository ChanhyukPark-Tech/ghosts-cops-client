import styled from "styled-components";
import Colors from "~/constants/Colors";
import { FlexBox, FlexCenter, GImage } from "~/constants/Common.style";
import { vw } from "~/constants/Size";
import { HEADER_HEIGHT } from "~/constants/Variables";

export const Container = styled(FlexBox)`
  position: sticky;
  top: 0;
  left: 0;
  padding: ${vw(10)};
  height: ${HEADER_HEIGHT};
  justify-content: space-evenly;
  align-items: center;
`;

export const LogoWrapper = styled(GImage)`
  margin-right: ${vw(10)};
  width: ${vw(75)};
  height: ${vw(75)};
`;

export const NavWrapper = styled(FlexCenter)`
  gap: ${vw(30)};
`;

export const WalletButton = styled.button`
  margin: ${vw(20)} 0;
  border: solid 1px ${Colors.yellow};
  background-color: transparent;
  border-radius: 20px;
  padding: 10px;
`;
