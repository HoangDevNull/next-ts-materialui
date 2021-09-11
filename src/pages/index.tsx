import { LandingPage } from 'modules/landing-page/LandingPage';
import { dehydrate, QueryClient } from 'react-query';
import { getGasPricesRequest } from 'api/block';
import { network } from 'lib/constants';

export default LandingPage;

/**
 * * You can consider between using getServerSideProps and getStaticProps from pagesCompment
 * *If not, getInitialProps can be done at modules folder for prefetch data
 * ! getInitialProps will disable Automatic Static Optimization.
 */
export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('gasPrices', () => getGasPricesRequest(network));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
