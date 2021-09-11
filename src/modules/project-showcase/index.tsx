import { MainLayout } from 'components/layouts';
import type { PageComponent } from 'next';

export const ProjectShowCasePage: PageComponent = () => {
  return <div>Show case</div>;
};

ProjectShowCasePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
