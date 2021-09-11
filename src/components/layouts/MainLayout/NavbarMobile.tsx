import { FC } from 'react';
import clsx from 'clsx';
import { Box, AppBar, Toolbar, IconButton as MuiIconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTypeSafeTranslation } from 'hooks/useTypeSafeTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { routes } from 'types/route';
import { useToggle } from 'hooks/useToggle';
import { IconButton } from 'components/IconButton';

import MenuIcon from '../../../../public/images/icons/menu.svg';
import { Hide } from '../Hide';

const useStyles = makeStyles((theme) => ({
  root: {},
  appBar: {
    zIndex: 1400,
    backgroundColor: 'transparent',
  },
  drawerClose: {
    top: 11,
  },
  toolBar: {
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    minHeight: 68,
  },
}));

const NavbarMobile: FC = () => {
  const classes = useStyles();
  const [open, toggleOpen] = useToggle(false);
  const { t } = useTypeSafeTranslation();
  return (
    <AppBar
      elevation={0}
      position={open ? 'relative' : 'absolute'}
      className={clsx({
        [classes.appBar]: true,
        [classes.drawerClose]: !open,
      })}
    >
      <Toolbar classes={{ root: classes.toolBar }}>
        <Link href={routes.landingPage} passHref>
          <Box className="cursor">
            <Hide if={!open}>
              <Image src="/images/logo/artway-logotype-dark.svg" layout="intrinsic" height={21.58} width={94.41} />
            </Hide>
            <Hide if={open}>
              <Image src="/images/logo/artway-logotype-light.svg" layout="intrinsic" height={21.58} width={94.41} />
            </Hide>
          </Box>
        </Link>

        <Hide if={!open}>
          <MuiIconButton onClick={toggleOpen}>
            <Image src="/images/icons/cross.svg" layout="fixed" width={18.85} height={16.14} />
          </MuiIconButton>
        </Hide>
        <Hide if={open}>
          <IconButton onClick={toggleOpen} htmlColor="#ffffff" icon={MenuIcon} />
        </Hide>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarMobile;
