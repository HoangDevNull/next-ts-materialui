import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

interface FullScreenBackgroundProps {
  xlUrl: string;
  mdUrl?: string;
  xsUrl?: string;
  className?: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: '100vh',
    minHeight: 757,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom center',
    backgroundRepeat: 'no-repeat',
    alignItems: 'center',
    display: 'flex',
    textAlign: 'center',
    marginTop: -2,
    marginBottom: -2,
    marginLeft: -2,
    marginRight: -2,
    backgroundImage: (props: FullScreenBackgroundProps) => `url(${props.xlUrl})`,
    [theme.breakpoints.down('md')]: {
      backgroundImage: (props: FullScreenBackgroundProps) => `url(${props.mdUrl})`,
      minHeight: 711,
    },
    [theme.breakpoints.down('xs')]: {
      backgroundImage: (props: FullScreenBackgroundProps) => `url(${props.xsUrl})`,
      minHeight: 621,
    },
  },
}));

export const FullScreenBackground: FC<FullScreenBackgroundProps> = ({ children, className, ...props }) => {
  const classes = useStyles(props);
  return <div className={clsx(classes.root, className)}>{children}</div>;
};
