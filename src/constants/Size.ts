import {
  XD_DESKTOP_WIDTH,
  XD_MOBILE_WIDTH,
  XD_TABLET_WIDTH
} from "./Variables";

export const calculator = (
  width: number,
  criteria:
    | typeof XD_DESKTOP_WIDTH
    | typeof XD_TABLET_WIDTH
    | typeof XD_MOBILE_WIDTH
) => {
  const percentage = (width / criteria) * 100;

  return percentage + "vw";
};

export const vw = (width: number) => {
  return calculator(width, XD_DESKTOP_WIDTH);
};

export const vwTablet = (width: number) => {
  return calculator(width, XD_TABLET_WIDTH);
};

export const vwMobile = (width: number) => {
  return calculator(width, XD_MOBILE_WIDTH);
};
