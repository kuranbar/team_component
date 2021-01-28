const breakpoints = [768, 992, 1280];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const bp = {
  tablet: mq[0],
  desktop_s: mq[1],
  desktop_l: mq[2],
};

export default bp;
