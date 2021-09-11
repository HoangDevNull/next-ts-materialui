import { useGasprice } from 'api/block';
import { network } from 'lib/constants';
import { LandingLayout } from 'components/layouts';
import type { PageComponent } from 'next';
import Banner from './Banner';

export const LandingPage: PageComponent = () => {
  // API fetching example with react-query
  const { data } = useGasprice(network, { enabled: false });

  return (
    <>
      <Banner />
    </>
  );
};

LandingPage.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};
