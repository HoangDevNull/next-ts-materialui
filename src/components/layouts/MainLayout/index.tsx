import { Hidden } from '@material-ui/core';
import { FC } from 'react';
import Footer from './Footer';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
import { BottomAppBar } from './BottomAppbar';

const PrimaryLayout: FC = ({ children }) => {
  return (
    <>
      <Hidden mdUp>
        <NavbarMobile />
      </Hidden>
      <Hidden smDown>
        <NavbarDesktop />
      </Hidden>
      <main className="h-screen">{children}</main>

      <Hidden mdUp>
        <BottomAppBar />
      </Hidden>
      <Footer />
    </>
  );
};

export default PrimaryLayout;
