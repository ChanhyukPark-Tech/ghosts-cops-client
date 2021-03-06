import styled from "styled-components";
import { FlexCenter, UpAnimation } from "~/constants/Common.style";
import { vw } from "~/constants/Size";

export const Container = styled.div``;

export const Banner = styled.div`
  aspect-ratio: ${1920 / 1080};

  img {
    width: 100%;
    height: 100%;
  }
`;

export const VideoWrapper = styled(FlexCenter)`
  padding: ${vw(100)};
`;

export const CarouselWrapper = styled.div`
  animation: ${UpAnimation()} 1s ease-in-out;
`;
