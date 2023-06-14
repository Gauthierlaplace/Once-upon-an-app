import { useSelector } from 'react-redux';

import HomeDescription from './HomeDescription/HomeDescription';
import HomeLogin from './HomeLogin/HomeLogin';
import HomeLogged from './HomeLogged/HomeLogged';

import './Home.scss';

function Home() {
  const logged = useSelector((state) => state.user.logged);

  return (
    <div className="Home">
      <HomeDescription />
      { logged ? <HomeLogged /> : <HomeLogin />}
    </div>
  );
}

export default Home;
