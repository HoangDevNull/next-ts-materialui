import { FC } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { useTypeSafeTranslation } from 'hooks/useTypeSafeTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { routes } from 'types/route';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    top: 11,
    height: `calc(100vh - 11px)`,
    paddingTop: 68 + 30,
    textAlign: 'center',
  },
  nav: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const MobileDrawer: FC<{ open: boolean; toggleOpen: () => void }> = ({ open, toggleOpen }) => {
  const classes = useStyles();
  const { t } = useTypeSafeTranslation();

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <SwipeableDrawer
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      anchor="top"
      open={open}
      onClose={toggleOpen}
      onOpen={toggleOpen}
      BackdropProps={{ invisible: true }}
      classes={{
        paper: classes.paper,
      }}
    >
      <Link href={routes.faq}>
        <Typography component="a" color="secondary">
          {t('header.out_faq')}
        </Typography>
      </Link>
      <Box component="a" my="61px">
        <Typography color="secondary">Facebook</Typography>
      </Box>
      <Typography color="secondary">Twitter</Typography>

      <Box mt="auto" mb="31px">
        <Typography variant="body1" className="semibold">
          {t('footer.contract')}
        </Typography>
        <Typography variant="body1">contact@artway.fr</Typography>

        <Box bgcolor="secondary.main" width="80%" mx="auto" height="1px" mt="37px" mb="30px" />

        <Typography align="center" variant="subtitle1">
          {t('footer.copy_right')}
        </Typography>
      </Box>
    </SwipeableDrawer>
  );
};

export default MobileDrawer;
