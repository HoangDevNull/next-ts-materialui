import * as React from 'react';

export const ChevronCloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.4 18.7" {...props}>
    <linearGradient
      id="prefix__a"
      gradientUnits="userSpaceOnUse"
      x1={0}
      y1={9.348}
      x2={22.366}
      y2={9.348}
      gradientTransform="matrix(1 0 0 -1 0 18.695)"
    >
      <stop offset={0} stopColor="#ef8135" />
      <stop offset={0.074} stopColor="#ee7c3c" />
      <stop offset={0.618} stopColor="#e5576a" />
      <stop offset={0.891} stopColor="#e1497c" />
    </linearGradient>
    <path
      fill="url(#prefix__a)"
      d="M22.3.8L11.6 18.5c-.1.2-.5.3-.7.2-.1 0-.1-.1-.2-.2L.1.8C-.1.5 0 .2.2.1.3 0 .4 0 .5 0h21.4c.3 0 .5.2.5.5 0 .1-.1.2-.1.3z"
    />
  </svg>
);
