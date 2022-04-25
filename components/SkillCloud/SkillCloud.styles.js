import { css } from '@emotion/react';

const skillCloudStyles = (theme) => css`
  span {
    color: ${theme.colors.grey};
    margin: 0 10px 5px 0;
    font-size: 14px;
    display: inline-block;
    transition: color 0.3s, transform 0.5s;

    &:hover,
    &:focus {
      transform: scale(1.1);
      color: ${theme.colors.secondary};
    }
  }
`;

export default skillCloudStyles;
