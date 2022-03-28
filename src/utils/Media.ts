import {
  XD_DESKTOP_WIDTH,
  XD_MOBILE_WIDTH,
  XD_TABLET_WIDTH
} from "~/constants/Variables";

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(XD_DESKTOP_WIDTH),
  tablet: customMediaQuery(XD_TABLET_WIDTH),
  mobile: customMediaQuery(XD_MOBILE_WIDTH)
};
