import { css } from '@emotion/react';
import { Breakpoints, mq } from '../../constants/mq';

const blogBannerStyles = (theme) => css`
  & .blog-header .col-inner {
    /* max-width: 700px; */
    margin: auto;

    ${mq(Breakpoints.bs)} {
      /* max-width: 800px; */
    }
  }

  & .date {
    color: ${theme.colors.grey};
    text-transform: uppercase;
  }

  & img {
    border-radius: 8px;
    margin-top: 2em;
  }
`;

export default blogBannerStyles;
