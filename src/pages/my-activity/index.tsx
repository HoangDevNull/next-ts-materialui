import { MyActivityPage } from 'modules/my-activity/MyActivityPage';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default MyActivityPage;

export async function getServerSideProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
