import { FC } from 'react';
import { Box, AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import Link from 'next/link';
import { routes } from 'types/route';

import { CoinButton } from './CoinButton';

const useStyles = makeStyles((theme) => ({
  root: {},
  appBar: {
    zIndex: 1400,
    backgroundColor: 'transparent',
  },
  toolBar: {
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    minHeight: 68,
  },
}));

const NavbarMobile: FC = () => {
  const classes = useStyles();
  return (
    <AppBar elevation={0} position="relative" className={classes.appBar}>
      <Toolbar classes={{ root: classes.toolBar }}>
        <Link href={routes.landingPage} passHref>
          <Box className="cursor">
            <Image src="/images/logo/artway-logotype-dark.svg" layout="intrinsic" height={21.58} width={94.41} />
          </Box>
        </Link>
        <CoinButton color="primary" variant="contained">
          100
        </CoinButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarMobile;
