import styled from "styled-components";
import Colors from "~/constants/Colors";
import { FlexBox, FlexCenter, GImage } from "~/constants/Common.style";
import { vw } from "~/constants/Size";
import { Body1 } from "~/constants/Typography";
import { HEADER_HEIGHT } from "~/constants/Variables";

export const Container = styled(FlexBox)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  padding: ${vw(10)};
  height: ${HEADER_HEIGHT}px;

  justify-content: space-evenly;
  align-items: center;

  background-color: ${Colors.black};

  z-index: 9;
`;

export const LogoWrapper = styled(GImage)`
  margin-right: ${vw(10)};
  width: ${vw(75)};
  height: ${vw(75)};
`;

export const NavWrapper = styled(FlexCenter)`
  gap: ${vw(30)};
  a {
    cursor: pointer;
  }
`;

export const WalletButton = styled.button`
  margin: ${vw(20)} 0;
  padding: 10px;

  background: linear-gradient(to left, transparent 50%, ${Colors.yellow} 50%)
    right;
  background-size: 200%;
  background-repeat: no-repeat; // 1px 색깔 보이는현상 해결
  transition: background-position 0.25s ease-in-out;
  border: solid 1px ${Colors.yellow};
  border-radius: 20px;
  box-shadow: 2px 2px 2px 2px ${Colors.yellow};
  cursor: pointer;

  span {
    transition: 0.25s ease-in-out;
  }
  &:hover {
    background-position: left;
    span {
      color: ${Colors.black};
    }
  }
`;
export const Account = styled(Body1)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100px;
`;

export const EmptyHeader = styled.div`
  height: ${HEADER_HEIGHT}px;
`;
