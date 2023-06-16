import { useSelector } from 'react-redux';

import HomeDescription from './HomeDescription/HomeDescription';
import HomeBook from './HomeBook/HomeBook';
import HomeLogged from './HomeLogged/HomeLogged';

import './Home.scss';

function Home() {
  const logged = useSelector((state) => state.user.logged);

  return (
    <div className="Home">
      <HomeDescription />
      { logged ? <HomeLogged /> : <HomeBook />}
    </div>
  );
}

export default Home;
