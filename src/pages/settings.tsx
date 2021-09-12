import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SettingPage } from 'modules/settings/SettingPage';

export default SettingPage;

export async function getServerSideProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
