import { FaqPage } from 'modules/faq/FaqPage';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default FaqPage;

export async function getServerSideProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
