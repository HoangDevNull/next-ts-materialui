import { UIPage } from 'modules/example/UIPage';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default UIPage;

export async function getServerSideProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
