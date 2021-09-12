import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { backgroundImage } from 'styles/sharedStyle';

interface FullScreenBackgroundProps {
  xlUrl: string;
  mdUrl?: string;
  xsUrl?: string;
  className?: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    height: '100vh',
    minHeight: 757,
    marginTop: -2,
    marginBottom: -2,
    marginLeft: -2,
    marginRight: -2,
    backgroundImage: (props: FullScreenBackgroundProps) => `url(${props.xlUrl})`,
    ...backgroundImage,
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
