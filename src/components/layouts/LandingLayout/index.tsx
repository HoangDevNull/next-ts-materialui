import { FC } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const LandingLayout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default LandingLayout;
