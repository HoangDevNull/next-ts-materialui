import { MainLayout } from 'components/layouts';
import type { PageComponent } from 'next';

export const MyActivityPage: PageComponent = () => {
  return <div>MY activity page</div>;
};

MyActivityPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
