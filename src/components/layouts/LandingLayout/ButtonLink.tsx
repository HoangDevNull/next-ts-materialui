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
      textDecoration: 'none',
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
      width: '0%',
      height: 5,
      top: '100%',
      left: 0,
      pointerEvents: 'none',
      transition: theme.transitions.create(['width']),
    },
    '&:hover': {
      '&::before': {
        width: '100%',
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

export const ButtonLink: FC<{ href: string; active?: boolean; as?: string }> = ({ href, active, children }) => {
  const classes = useStyles();

  return (
    <Link href={href} passHref>
      <div className={clsx(classes.root, active && classes.active)}>
        <StyledLink>{children}</StyledLink>
      </div>
    </Link>
  );
};
