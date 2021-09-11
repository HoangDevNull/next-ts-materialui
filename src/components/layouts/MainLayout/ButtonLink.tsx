import MuiLink from '@material-ui/core/Link';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { FC } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

const StyledLink = withStyles((theme) => ({
  root: {
    position: 'relative',
    height: '100%',
    fontSize: 14,
    color: theme.palette.common.white,
    lineHeight: `48px`,
    letterSpacing: 0,
    '&:hover': {
      textDecoration: 'unset',
    },
  },
}))(MuiLink);

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: 'pointer',
    position: 'relative',
    height: '100%',
    '&::before': {
      content: '""',
      position: 'absolute',
      backgroundColor: theme.palette.common.white,
      width: '100%',
      height: 1,
      top: '100%',
      left: 0,
      pointerEvents: 'none',
      transformOrigin: '50% 100%',
      transition: 'clip-path 0.3s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1)',
      clipPath: 'polygon(0% 0%, 0% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%)',
    },
    '&:hover': {
      '&::before': {
        transform: 'translate3d(0, 1px, 0) scale3d(1, 5, 1)',
        clipPath: 'polygon(0% 0%, 0% 100%, 50% 100%, 50% 0, 50% 0, 50% 100%, 50% 100%, 0 100%, 100% 100%, 100% 0%)',
      },
    },
  },
  active: {
    '&::before': {
      transform: 'translate3d(0, 1px, 0) scale3d(1, 5, 1)',
      clipPath: 'polygon(0% 0%, 0% 100%, 50% 100%, 50% 0, 50% 0, 50% 100%, 50% 100%, 0 100%, 100% 100%, 100% 0%)',
    },
  },
}));

const ButtonLink: FC<{ href: string; active?: boolean; as?: string }> = ({ href, active, children }) => {
  const classes = useStyles();

  return (
    <Link href={href} passHref>
      <div className={clsx(classes.root, active && classes.active)}>
        <StyledLink>{children}</StyledLink>
      </div>
    </Link>
  );
};

export default ButtonLink;
