const breakpoints = [520, 760, 1024, 1230, 1570];

const Breakpoints = {
  mb: 0,
  tb: 1,
  ds: 3,
  bs: 4,
  gs: 5,
};

const mq = (minWidth) =>
  `@media screen and (min-width: ${breakpoints[minWidth]}px)`;

export { mq, breakpoints, Breakpoints };
