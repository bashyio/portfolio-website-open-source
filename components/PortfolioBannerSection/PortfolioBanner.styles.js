import { css } from '@emotion/react';
import { breakpoints, Breakpoints, mq } from '../../constants/mq';

const portfolioBannerStyles = (theme) => css`
  @media screen and (min-width: ${breakpoints[3]}px) and (max-width: ${breakpoints[4]}px) {
    & section {
      margin-top: -108px;
      padding-top: 108px;
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
    & .row,
    & .container {
      height: 100%;
    }
  }

  & section {
    ${mq(Breakpoints.gs)} {
      padding-bottom: 72px;
    }
  }

  & .row {
    ${mq(Breakpoints.tb)} {
      display: flex;
      align-items: center;
    }
  }

  & h1 {
    margin-top: 0.3rem;
    margin-bottom: 0.5rem;

    & span {
      transition: color 0.5s, opacity 0.5s;

      &:hover,
      &:focus {
        color: ${theme.colors.secondary};
      }
    }
  }

  & .align-r {
    position: relative;
  }

  & img {
    border-radius: 10px;
    margin-top: 2em;

    ${mq(Breakpoints.tb)} {
      margin-top: 0;
    }
  }

  & .type {
    color: ${theme.colors.grey};
    text-transform: uppercase;
  }

  & .short-descrip {
    color: ${theme.colors.lightGrey};
  }
`;

export default portfolioBannerStyles;
