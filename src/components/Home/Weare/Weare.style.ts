import styled from "styled-components";
import { FlexCenter, GImage } from "~/constants/Common.style";
import { vw } from "~/constants/Size";

export const Container = styled(FlexCenter)``;

export const Logo = styled(GImage)`
  width: ${vw(200)};
  height: ${vw(200)};
`;

export const TextWrapper = styled(FlexCenter)`
  max-width: 50%;
`;
