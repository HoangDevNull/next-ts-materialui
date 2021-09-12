import { MyLibraryPage } from 'modules/my-library/MyLibraryPage';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default MyLibraryPage;

export async function getServerSideProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
