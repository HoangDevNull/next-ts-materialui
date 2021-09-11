import type { NextPageWithLayout } from 'next';

const Home: NextPageWithLayout = () => {
  return <div>Hello world</div>;
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <>{page}</>;
};
