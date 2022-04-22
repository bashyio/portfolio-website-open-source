import { css } from '@emotion/react';
import { Breakpoints, mq } from '../../constants/mq';

const parallaxSectionStyles = (image) => css`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  background-attachment: fixed;
  height: 360px;
  max-height: 100vh;

  ${mq(Breakpoints.tb)} {
    height: 768px;
  }
  ${mq(Breakpoints.gs)} {
    height: 100vh;
  }
`;

export default parallaxSectionStyles;
