import styled from "styled-components";
import Colors from "~/constants/Colors";
import { vw } from "~/constants/Size";

interface GButtonPropsType {
  width: number;
  height: number;
  filled: boolean;
  bgColor: string;
  borderRadius?: number;
  relative?: boolean;
  shadow?: string;
}

export const Container = styled.button<GButtonPropsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => vw(width)};
  height: ${({ height }) => vw(height)};

  background-color: ${({ filled, bgColor }) =>
    filled ? bgColor : "transparent"};

  border: 1px solid
    ${({ filled, bgColor }) => (filled ? "transparent" : bgColor)};

  cursor: pointer;

  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}px;`}
  ${({ relative }) => relative && "position: relative;"}
  ${({ shadow }) => shadow && `box-shadow: ${shadow};`};

  background: linear-gradient(
      to left,
      transparent 50%,
      ${({ bgColor }) => (bgColor ? bgColor : Colors.red)} 50%
    )
    right;
  background-size: 200%;
  background-repeat: no-repeat; // 1px 색깔 보이는현상 해결
  transition: all 0.25s ease-in-out;

  &:hover {
    transform: scale(1.5);
    background-position: left;
    // children span
    span {
      color: ${Colors.black};
    }
  }
`;
