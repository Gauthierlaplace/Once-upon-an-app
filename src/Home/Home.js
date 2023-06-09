import HomeDescription from '../HomeDescription/HomeDescription';
import HomeLogin from '../HomeLogin/HomeLogin';
import './Home.scss';

function Home() {
  return (
    <div className="Home">
      <HomeDescription />
      <HomeLogin />
    </div>
  );
}

export default Home;
