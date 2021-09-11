import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    height: 11,
    background: theme.palette.colors.gradient.primary,
  },
}));

export const LineGradient: FC = () => {
  const classes = useStyles();
  return <div className={classes.root} />;
};
