import styled from "styled-components";
import { media } from "~/utils/Media";
import Colors from "./Colors";
import { vw, vwMobile, vwTablet } from "./Size";

export const Text = styled.span<{
  color?: string;
  lineHeight?: number;
  size?: number;
  pre?: boolean;
  alignCenter?: boolean;
}>`
  color: ${({ color }) => (color ? color : Colors.white)};
  display: inline-block;
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}px;`}

  ${({ size }) => size && `font-size: ${size}px;`};
  ${({ pre }) => pre && "white-space: pre-wrap;"}
  ${({ alignCenter }) => alignCenter && "text-align: center;"}
`;

export const Helvetica = styled(Text)`
  font-family: "Helvetica Neue Lt Std";
`;

// Body 1 ~ 6

/**
 * 바디 6
 * @size 14px
 * @height 24px;
 */
export const Body6 = styled(Helvetica)`
  font-size: ${vw(14)};
  line-height: ${vw(24)};

  ${media.tablet} {
    font-size: ${vwTablet(14)};
    line-height: ${vwTablet(24)};
  }

  ${media.mobile} {
    font-size: ${vwMobile(14)};
    line-height: ${vwMobile(24)};
  }
`;

/**
 * 바디 5
 * @weight Bold
 * @size 14px
 * @height 28px
 */
export const Body5 = styled(Helvetica)`
  font-size: ${vw(14)};
  line-height: ${vw(28)};
  font-weight: 700;

  ${media.tablet} {
    font-size: ${vwTablet(14)};
    line-height: ${vwTablet(28)};
  }

  ${media.mobile} {
    font-size: ${vwMobile(14)};
    line-height: ${vwMobile(28)};
  }
`;

/**
 * 바디 4
 * @size 16px
 * @height 28px
 */
export const Body4 = styled(Helvetica)`
  font-size: ${vw(16)};
  line-height: ${vw(28)};

  ${media.tablet} {
    font-size: ${vwTablet(16)};
    line-height: ${vwTablet(28)};
  }

  ${media.mobile} {
    font-size: ${vwMobile(16)};
    line-height: ${vwMobile(28)};
  }
`;

/**
 * 바디 3
 * @weight Bold
 * @size 16px
 * @height 32px
 */
export const Body3 = styled(Helvetica)`
  font-size: ${vw(16)};
  line-height: ${vw(32)};
  font-weight: 700;

  ${media.tablet} {
    font-size: ${vwTablet(16)};
    line-height: ${vwTablet(32)};
  }

  ${media.mobile} {
    font-size: ${vwMobile(16)};
    line-height: ${vwMobile(32)};
  }
`;

/**
 * 바디 2
 * @size 18px
 * @height 32px
 */
export const Body2 = styled(Helvetica)`
  font-size: ${vw(18)};
  line-height: ${vw(32)};

  ${media.tablet} {
    font-size: ${vwTablet(18)};
    line-height: ${vwTablet(32)};
  }

  ${media.mobile} {
    font-size: ${vwMobile(18)};
    line-height: ${vwMobile(32)};
  }
`;

/**
 * 바디 1
 * @weight Bold
 * @size 18px
 * @height 30px
 */
export const Body1 = styled(Helvetica)`
  font-size: ${vw(18)};
  line-height: ${vw(30)};
  font-weight: 700;

  ${media.tablet} {
    font-size: ${vwTablet(18)};
    line-height: ${vwTablet(30)};
  }

  ${media.mobile} {
    font-size: ${vwMobile(18)};
    line-height: ${vwMobile(30)};
  }
`;

// Subtitle 1 ~ 4

/**
 * 서브타이틀 4
 * @size 20px
 * @height 32px
 * @spacing -0.04px
 */
export const SubTitle4 = styled(Helvetica)`
  font-size: ${vw(20)};
  line-height: ${vw(32)};
  letter-spacing: -0.04px;

  ${media.tablet} {
    font-size: ${vwTablet(20)};
    line-height: ${vwTablet(32)};
  }

  ${media.mobile} {
    font-size: ${vwMobile(20)};
    line-height: ${vwMobile(32)};
  }
`;

/**
 * 서브타이틀 3
 * @weight Bold
 * @size 22px
 * @height 36px
 */
export const SubTitle3 = styled(Helvetica)`
  font-size: ${vw(22)};
  line-height: ${vw(36)};
  font-weight: 700;

  ${media.tablet} {
    font-size: ${vwTablet(22)};
    line-height: ${vwTablet(36)};
  }

  ${media.mobile} {
    font-size: ${vwMobile(22)};
    line-height: ${vwMobile(36)};
  }
`;

/**
 * 서브타이틀 1
 * @weight Bold
 * @size 24px
 * @height 36px
 */
export const SubTitle1 = styled(Helvetica)`
  font-size: ${vw(24)};
  line-height: ${vw(36)};
  font-weight: 700;

  ${media.tablet} {
    font-size: ${vwTablet(24)};
    line-height: ${vwTablet(36)};
  }

  ${media.mobile} {
    font-size: ${vwMobile(24)};
    line-height: ${vwMobile(36)};
  }
`;

/**
 * 서브타이틀 2
 * @weight Bold
 * @size 22px
 * @height 36px
 */
export const SubTitle2 = styled(SubTitle1)`
  font-weight: 400;
  letter-spacing: -0.04px;
`;

// Header 1 ~ 6 , 8

/**
 * 헤더 8
 * @size 36px
 * @height 54px
 * @spacing -0.04px
 */
export const Header8 = styled(Helvetica)`
  font-size: ${vw(36)};
  line-height: ${vw(54)};
  letter-spacing: -0.04px;

  ${media.tablet} {
    font-size: ${vwTablet(36)};
    line-height: ${vwTablet(54)};
  }

  ${media.mobile} {
    font-size: ${vwMobile(36)};
    line-height: ${vwMobile(54)};
  }
`;

/**
 * 헤더 6
 * @size 28px
 * @height 42px
 * @spacing -0.04px
 */
export const Header6 = styled(Helvetica)`
  font-size: ${vw(28)};
  line-height: ${vw(42)};
  letter-spacing: -0.04px;

  ${media.tablet} {
    font-size: ${vwTablet(28)};
    line-height: ${vwTablet(42)};
  }

  ${media.mobile} {
    font-size: ${vwMobile(28)};
    line-height: ${vwMobile(42)};
  }
`;

/**
 * 헤더 5
 * @weight Bold
 * @size 30px
 * @height 40px
 * @spacing -0.04px
 */
export const Header5 = styled(Helvetica)`
  font-size: ${vw(30)};
  line-height: ${vw(40)};
  font-weight: 700;
  letter-spacing: -0.04px;

  ${media.tablet} {
    font-size: ${vwTablet(30)};
    line-height: ${vwTablet(40)};
  }

  ${media.mobile} {
    font-size: ${vwMobile(30)};
    line-height: ${vwMobile(40)};
  }
`;

/**
 * 헤더 4
 * @size 34px
 * @height 50px
 * @spacing -0.04px
 */
export const Header4 = styled(Helvetica)`
  font-size: ${vw(34)};
  line-height: ${vw(50)};
  letter-spacing: -0.04px;

  ${media.tablet} {
    font-size: ${vwTablet(34)};
    line-height: ${vwTablet(50)};
  }

  ${media.mobile} {
    font-size: ${vwMobile(34)};
    line-height: ${vwMobile(50)};
  }
`;

/**
 * 헤더 3
 * @weight Bold
 * @size 34px
 * @height 50px
 * @spacing -0.04px
 */
export const Header3 = styled(Header4)`
  font-weight: 700;
`;

/**
 * 헤더 2
 * @size 36px
 * @height 54px
 * @spacing -0.04px
 */
export const Header2 = styled(Helvetica)`
  font-size: ${vw(36)};
  line-height: ${vw(54)};
  letter-spacing: -0.04px;

  ${media.tablet} {
    font-size: ${vwTablet(36)};
    line-height: ${vwTablet(54)};
  }

  ${media.mobile} {
    font-size: ${vwMobile(36)};
    line-height: ${vwMobile(54)};
  }
`;

/**
 * 헤더 1
 * @size 48px
 * @height 64px
 */
export const Header1 = styled(Helvetica)`
  font-size: ${vw(48)};
  line-height: ${vw(64)};

  ${media.tablet} {
    font-size: ${vwTablet(48)};
    line-height: ${vwTablet(64)};
  }

  ${media.mobile} {
    font-size: ${vwMobile(48)};
    line-height: ${vwMobile(64)};
  }
`;

/**
 * 헤더
 * @size 64px
 * @height 90px
 */
export const Header0 = styled(Helvetica)`
  font-size: ${vw(64)};
  line-height: ${vw(90)};

  ${media.tablet} {
    font-size: ${vwTablet(64)};
    line-height: ${vwTablet(90)};
  }

  ${media.mobile} {
    font-size: ${vwMobile(64)};
    line-height: ${vwMobile(90)};
  }
`;
