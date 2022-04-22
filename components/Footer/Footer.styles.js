import { css } from '@emotion/react';
import { Breakpoints, mq } from '../../constants/mq';

const footerStyles = (theme) => css`
  & .col-inner {
    margin: 0 0 20px 0;

    ${mq(Breakpoints.tb)} {
      margin: 0;
    }
  }

  & .footer-social {
    list-style-type: none;
    margin: 10px 0 0 0;
    padding: 0;

    & li {
      display: inline-block;
      margin: 0 10px 0 0;

      ${mq(Breakpoints.tb)} {
        margin: 0 15px 0 0;
      }

      & .social-icon {
        height: 30px;
        width: 30px;
        display: inline-block;
        border-radius: 5px;
        background: ${theme.colors.light};
        color: ${theme.colors.dark};
        transition: all 0.5s;
        text-align: center;
        padding: 5px;

        & svg {
          width: 20px;
          height: 20px;
        }
      }
      & a:hover .social-icon,
      & a:focus .social-icon {
        background: ${theme.colors.secondary};
        color: ${theme.colors.white};
      }

      &.facebook a:hover .social-icon,
      &.facebook a:focus .social-icon {
        background: ${theme.colors.facebook};
        color: ${theme.colors.white};
      }

      &.github a:hover .social-icon,
      &.github a:focus .social-icon {
        background: ${theme.colors.github};
        color: ${theme.colors.white};
      }

      &.twitter a:hover .social-icon,
      &.twitter a:focus .social-icon {
        background: ${theme.colors.twitter};
        color: ${theme.colors.white};
      }

      &.linkedin a:hover .social-icon,
      &.linkedin a:focus .social-icon {
        background: ${theme.colors.linkedin};
        color: ${theme.colors.white};
      }

      &.instagram a:hover .social-icon,
      &.instagram a:focus .social-icon {
        background: ${theme.colors.instagram};
        color: ${theme.colors.white};
      }
    }

    & li:last-child {
      margin-right: 0;
    }
  }

  & .copyright {
    text-transform: uppercase;
    text-align: right;
  }

  & .footer-logo {
    transform-origin: 10px;
  }

  & a:hover .footer-logo,
  & a:focus .footer-logo {
    transform: scale(1.05);
  }
`;

export default footerStyles;
