import { HomePage } from 'modules/home/HomePage';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default HomePage;

export async function getServerSideProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
