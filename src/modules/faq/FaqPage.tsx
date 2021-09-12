import { LandingLayout } from 'components/layouts';
import type { PageComponent } from 'next';

import FaqBanner from './components/FaqBanner';
import FaqFooter from './components/FaqFooter';
import ListFaq from './components/ListFaq';

export const FaqPage: PageComponent = () => {
  return (
    <>
      <FaqBanner />
      <ListFaq />
      <FaqFooter />
    </>
  );
};

FaqPage.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};
