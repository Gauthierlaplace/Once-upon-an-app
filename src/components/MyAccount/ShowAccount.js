/* eslint-disable no-console */
import './MyAccount.scss';
import { useSelector } from 'react-redux';
import api from '../../api/api';

function ShowAccount() {
  const userId = useSelector((state) => state.user.currentUserId);
  const token = useSelector((state) => state.user.token);
  const emailLogin = useSelector((state) => state.user.email);
  const nickname = useSelector((state) => state.user.nickname);
  // const heroPicture = useSelector((state) => state.game.player.picture);
  const heroName = useSelector((state) => state.game.player.name);

  api
    .get(
      `/users/${userId}`,
      {
        headers: {
          Authorization: `bearer ${token}`
        }
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="MyAccount-Show">
      <h1>{heroName}</h1>
      <h2>{nickname}</h2>
      <h2>{emailLogin}</h2>
      {/* <img src={heroPicture} alt="Avatar Hero" /> */}
    </div>
  );
}

export default ShowAccount;
