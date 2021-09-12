import { LandingPage } from 'modules/landing-page/LandingPage';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { dehydrate, QueryClient } from 'react-query';
import { getGasPricesRequest } from 'api/block';
import { network } from 'lib/constants';

export default LandingPage;

/**
 * * You can consider between using getServerSideProps and getStaticProps from pagesCompment
 * *If not, getInitialProps can be done at modules folder for prefetch data
 * ! getInitialProps will disable Automatic Static Optimization.
 */
export async function getServerSideProps({ locale }: any) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('gasPrices', () => getGasPricesRequest(network));
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      dehydratedState: dehydrate(queryClient),
    },
  };
}
