import { FC, ReactElement } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import { useRouter } from 'next/router';
import { routes } from 'types/route';
import Link from 'next/link';
import { Box, Slide, useScrollTrigger } from '@material-ui/core';
import { IconButton } from 'components/IconButton';

import { HomeIcon } from 'icons/HomeIcon';
import { LibraryIcon } from 'icons/LibraryIcon';
import { ActivityIcon } from 'icons/ActivityIcon';
import { ProfileIcon } from 'icons/ProfileIcon';
import { DiscussIcon } from 'icons/DiscussIcon';

interface HideOnScrollProps {
  children: ReactElement;
}

const HideOnScroll = ({ children }: HideOnScrollProps) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="up" in={!trigger}>
      {children}
    </Slide>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      top: 'auto',
      bottom: -1,
      height: 73,
      borderRadius: '30px 30px 0 0',
      justifyContent: 'center',
    },
    toolBar: {
      justifyContent: 'space-around',
    },
    grow: {
      flexGrow: 1,
    },
  })
);

export const BottomAppBar: FC = () => {
  const classes = useStyles();
  const { asPath } = useRouter();
  return (
    <>
      <CssBaseline />
      <HideOnScroll>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Link href={routes.home} passHref>
              <Box component="a">
                <IconButton darkTheme contained={asPath === routes.home} fontSize="small" icon={HomeIcon} />
              </Box>
            </Link>
            <Link href={routes.myLibrary} passHref>
              <Box component="a">
                <IconButton darkTheme contained={asPath === routes.myLibrary} icon={LibraryIcon} />
              </Box>
            </Link>
            <Link href={routes.myActivity} passHref>
              <Box component="a">
                <IconButton darkTheme contained={asPath === routes.myActivity} icon={ActivityIcon} />
              </Box>
            </Link>
            <Link href={routes.chatRoom} passHref>
              <Box component="a">
                <IconButton darkTheme contained={asPath === routes.chatRoom} icon={DiscussIcon} />
              </Box>
            </Link>
            <Link href={routes.settings} passHref>
              <Box component="a">
                <IconButton darkTheme contained={asPath === routes.settings} icon={ProfileIcon} />
              </Box>
            </Link>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};
