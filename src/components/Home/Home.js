import HomeDescription from './HomeDescription/HomeDescription';
import HomeForms from './HomeForms/HomeForms';
import './Home.scss';

function Home() {
  return (
    <div className="Home">
      <HomeDescription />
      <HomeForms />
    </div>
  );
}

export default Home;
