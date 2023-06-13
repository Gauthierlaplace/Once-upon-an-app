import { useSelector } from "react-redux";

import HomeDescription from './HomeDescription/HomeDescription';
import HomeLogin from './HomeLogin/HomeLogin';
import './Home.scss';

function Home() {
  const logged = useSelector((state) => state.user.logged);
  return (
    <div className="Home">
      <HomeDescription />
      <HomeLogin />
    </div>
  );
}

export default Home;
