import { FC } from 'react';
import { Hidden } from '@material-ui/core';
import SignInModal from 'modules/auth/SignInModal';
import Footer from './Footer';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const LandingLayout: FC = ({ children }) => {
  return (
    <>
      <Hidden mdUp>
        <NavbarMobile />
      </Hidden>
      <Hidden smDown>
        <NavbarDesktop />
      </Hidden>
      <main>{children}</main>
      <Footer />
      <SignInModal />
    </>
  );
};

export default LandingLayout;
