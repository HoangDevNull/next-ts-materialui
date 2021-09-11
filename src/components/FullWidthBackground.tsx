import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

interface FullWidthBackgroundProps {
  xlUrl: string;
  mdUrl?: string;
  xsUrl?: string;
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
    backgroundImage: (props: FullWidthBackgroundProps) => `url(${props.xlUrl})`,
    [theme.breakpoints.down('md')]: {
      backgroundImage: (props: FullWidthBackgroundProps) => `url(${props.mdUrl})`,
      minHeight: 711,
    },
    [theme.breakpoints.down('sm')]: {
      backgroundImage: (props: FullWidthBackgroundProps) => `url(${props.xsUrl})`,
      minHeight: 621,
    },
  },
}));

const FullWidthBackground: FC<FullWidthBackgroundProps> = ({ children, ...props }) => {
  const classes = useStyles(props);
  return <div className={classes.root}>{children}</div>;
};

export default FullWidthBackground;
