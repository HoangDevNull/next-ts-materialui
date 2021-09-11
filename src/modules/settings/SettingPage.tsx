import { MainLayout } from 'components/layouts';
import type { PageComponent } from 'next';

export const SettingPage: PageComponent = () => {
  return <div>Setting Page</div>;
};

SettingPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
