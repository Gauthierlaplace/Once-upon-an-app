import './MyAccount.scss';
import { useSelector } from 'react-redux';
// import api from '../'

function ShowAccount() {
  const nickname = useSelector((state) => state.user.nickname);
  const heroName = useSelector((state) => state.game.heroData[0].name);
  const heroPicture = useSelector((state) => state.game.heroData[0].picture);
  const emailLogin = useSelector((state) => state.user.email);

// api
// .get(
//   '/users'
// )
  return (
    <div className="Show">
      <h1>{heroName}</h1>
      <h2>{nickname}</h2>
      {/* <h2>{emailLogin}</h2> */}
      {/* <img src={heroPicture} alt="Avatar Hero" /> */}
    </div>
  );
}

export default ShowAccount;
