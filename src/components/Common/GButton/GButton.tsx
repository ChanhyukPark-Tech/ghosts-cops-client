import React from "react";
import * as Styled from "./GButton.style";
interface GButtonPropsType {
  children: React.ReactElement;
  width: number;
  height: number;
  filled: boolean;
  onClickHandler: Function;
  bgColor: string;
  title: string;
  disable?: boolean;
  borderRadius?: number;
  relative?: boolean;
  shadow?: string;
}
const GButton = ({
  children,
  width,
  height,
  filled,
  onClickHandler,
  bgColor,
  title,
  disable,
  borderRadius,
  relative,
  shadow
}: GButtonPropsType) => {
  return (
    <Styled.Container
      width={width}
      height={height}
      filled={filled}
      bgColor={bgColor}
      onClick={() => {
        onClickHandler();
      }}
      title={title}
      disabled={disable}
      borderRadius={borderRadius}
      relative={relative}
      shadow={shadow}
    >
      {children}
    </Styled.Container>
  );
};

export default GButton;
