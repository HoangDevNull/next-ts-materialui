import { FC } from 'react';
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTypeSafeTranslation } from 'hooks/useTypeSafeTranslation';
import { useRouter } from 'next/router';
import { routes } from 'types/route';
import Image from 'next/image';
import { MainGrid } from 'components/MainGrid';
import { IconButton } from 'components/IconButton';
import Link from 'next/link';
import { HomeIcon } from 'asset/icons/HomeIcon';
import { LibraryIcon } from 'asset/icons/LibraryIcon';
import { ActivityIcon } from 'asset/icons/ActivityIcon';
import { ProfileIcon } from 'asset/icons/ProfileIcon';
import { DiscussIcon } from 'asset/icons/DiscussIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
  },
  nav: {
    position: 'relative',
    display: 'flex',
    padding: '30px 0',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoWrap: {
    cursor: 'pointer',
    margin: '0px',
    [theme.breakpoints.down('md')]: {
      margin: '0px',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0px',
    },
  },
}));

const NavbarDesktop: FC = () => {
  const classes = useStyles();
  const { t } = useTypeSafeTranslation();
  const { asPath } = useRouter();
  return (
    <MainGrid className={classes.root}>
      <nav className={classes.nav}>
        <Link href={routes.home} passHref>
          <Box display="flex" alignItems="center" className={classes.logoWrap}>
            <Image src="/images/logo/artway-logotype-dark.svg" layout="intrinsic" height={38} width={167} />
          </Box>
        </Link>

        <Box display="grid" gridTemplateColumns="1fr 1fr 1fr 1fr 1fr" gridColumnGap="30px">
          <Link href={routes.home} passHref>
            <Box component="a">
              <IconButton contained={asPath === routes.home} fontSize="small" icon={HomeIcon} />
            </Box>
          </Link>
          <Link href={routes.myLibrary} passHref>
            <Box component="a">
              <IconButton contained={asPath === routes.myLibrary} icon={LibraryIcon} />
            </Box>
          </Link>
          <Link href={routes.myActivity} passHref>
            <Box component="a">
              <IconButton contained={asPath === routes.myActivity} icon={ActivityIcon} />
            </Box>
          </Link>
          <Link href={routes.chatRoom} passHref>
            <Box component="a">
              <IconButton contained={asPath === routes.chatRoom} icon={DiscussIcon} />
            </Box>
          </Link>
          <Link href={routes.settings} passHref>
            <Box component="a">
              <IconButton contained={asPath === routes.settings} icon={ProfileIcon} />
            </Box>
          </Link>
        </Box>
        <Box>
          <Button
            startIcon={<Image src="/images/icons/money.svg" width={13} height={13.28} />}
            size="small"
            variant="text"
            color="primary"
            className="bold"
          >
            100
          </Button>
          <Button variant="contained" color="primary">
            {t('header.virtual_shop')}
          </Button>
        </Box>
      </nav>
    </MainGrid>
  );
};

export default NavbarDesktop;
