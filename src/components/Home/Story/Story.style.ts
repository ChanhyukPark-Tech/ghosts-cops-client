import styled from "styled-components";
import { FlexCenter } from "~/constants/Common.style";
import { vw } from "~/constants/Size";

export const Container = styled(FlexCenter)``;

export const Banner = styled.div`
  aspect-ratio: ${1920 / 1080};
  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextWrapper = styled(FlexCenter)`
  max-width: 70%;
`;

export const SubTextWrapper = styled.div`
  max-width: 70%;
`;
