import { Hidden } from '@material-ui/core';
import { FC } from 'react';
import Footer from './Footer';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

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
      <Footer />
    </>
  );
};

export default PrimaryLayout;
