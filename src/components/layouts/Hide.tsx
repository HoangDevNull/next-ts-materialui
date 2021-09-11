/* eslint-disable react/destructuring-assignment */
import { FC } from 'react';
import Box from '@material-ui/core/Box';

export const Hide: FC<{ if: boolean }> = ({ children, ...props }) => {
  return <Box display={props.if ? 'none' : 'block'}>{children}</Box>;
};
