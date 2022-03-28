import styled from "styled-components";
import { media } from "~/utils/Media";
import Colors from "./Colors";
import { vw, vwMobile, vwTablet } from "./Size";

export const HorizontalSeperateLine = styled.div<{ color?: string }>`
  width: 100%;
  height: 1px;
  background-color: ${({ color }) => (color ? color : Colors.white)};
`;

export const SizedBox = styled.div<{ height?: number; width?: number }>`
  ${({ height }) => height && `height: ${vw(height)};`}
  ${({ width }) => width && `width: ${vw(width)};`}

  ${media.tablet} {
    ${({ height }) => height && `height: ${vwTablet(height)};`}
    ${({ width }) => width && `width: ${vwTablet(width)};`}
  }

  ${media.mobile} {
    ${({ height }) => height && `height: ${vwMobile(height)};`}
    ${({ width }) => width && `width: ${vwTablet(width)};`}
  }
`;

export const FlexBox = styled.div<{ direction?: string }>`
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  display: flex;
`;

export const GImage = styled.img<{ width?: string; height?: string }>`
  vertical-align: top;
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
`;
export const FlexCenter = styled(FlexBox)`
  justify-content: center;
  align-items: center;
`;
