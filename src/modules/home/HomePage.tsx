import { MainLayout } from 'components/layouts';
import type { PageComponent } from 'next';

export const HomePage: PageComponent = () => {
  return <div>Show case</div>;
};

HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
