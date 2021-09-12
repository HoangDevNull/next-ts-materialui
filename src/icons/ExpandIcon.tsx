import * as React from 'react';

export const ExpandIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      fill="0"
      d="M24 1.5c0-.8-.7-1.5-1.5-1.5H15c-.8 0-1.5.7-1.5 1.5S14.2 3 15 3h3.9L14 7.9c-.6.6-.6 1.5 0 2.1.6.6 1.5.6 2.1 0L21 5.1V9c0 .8.7 1.5 1.5 1.5S24 9.8 24 9V1.5zM10.1 13.9c-.6-.6-1.5-.6-2.1 0l-5 5V15c0-.8-.7-1.5-1.5-1.5S0 14.2 0 15v7.5c0 .8.7 1.5 1.5 1.5H9c.8 0 1.5-.7 1.5-1.5S9.8 21 9 21H5.1l4.9-4.9c.7-.6.7-1.6.1-2.2z"
    />
  </svg>
);
