import { FC } from 'react';
import NextLink, { LinkProps } from 'next/link';
import { withStyles } from '@material-ui/core/styles';
import MuiLink from '@material-ui/core/Link';

const StyledLink = withStyles((theme) => ({
  root: {
    textTransform: 'unset',
    height: 24,
    fontSize: 13,
    lineHeight: `24px`,
    letterSpacing: 0,
    color: theme.palette.colors.main.accent,
  },
}))(MuiLink);

export const Link: FC<LinkProps> = ({ href, as, children }) => {
  return (
    <NextLink href={href} as={as} passHref>
      <StyledLink>{children}</StyledLink>
    </NextLink>
  );
};
