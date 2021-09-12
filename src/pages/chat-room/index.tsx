import { ChatRoomPage } from 'modules/chat-room/ChatRoomPage';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default ChatRoomPage;

export async function getServerSideProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
