import { MainLayout } from 'components/layouts';
import type { PageComponent } from 'next';

export const MyLibraryPage: PageComponent = () => {
  return <div>MY lirary page</div>;
};

MyLibraryPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
