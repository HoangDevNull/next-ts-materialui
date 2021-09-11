import { MainLayout } from 'components/layouts';
import type { PageComponent } from 'next';

export const ChatRoomPage: PageComponent = () => {
  return <div>Chat room</div>;
};

ChatRoomPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
