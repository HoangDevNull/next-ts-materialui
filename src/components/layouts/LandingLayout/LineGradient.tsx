import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    height: 11,
    zIndex: 2, // Greater than fullscreen background
  },
  primary: {
    background: theme.palette.colors.gradient.primary,
  },
  secondary: {
    background: theme.palette.colors.gradient.secondary,
  },
}));

export const LineGradient: FC<{ color?: 'primary' | 'secondary' }> = ({ color = 'primary' }) => {
  const classes = useStyles();
  return <div className={clsx(classes.root, classes[color])} />;
};
