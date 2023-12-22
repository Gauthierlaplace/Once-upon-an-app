import './MyAccount.scss';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../api/api';
import { getAccountInfos } from '../../actions/user';

function ShowAccount() {
  const emailLogin = useSelector((state) => state.user.email);
  const nickname = useSelector((state) => state.user.nickname);
  const heroPicture = useSelector((state) => state.user.picture);
  const dispatch = useDispatch();

  api
    .get('/users/details')
    .then((response) => {
      // console.log(response);
      const path = `${process.env.REACT_APP_ASSETS_BASE}`;
      const userAPIpicture = `${path}${response.data.avatarPath}`;
      dispatch(getAccountInfos(
        response.data.pseudo,
        response.data.email,
        userAPIpicture
      ));
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="MyAccount-Show">
      <div className="MyAccount-Show-info">Pseudo du joueur : {nickname}</div>
      <div className="MyAccount-Show-info">E-mail du compte : {emailLogin}</div>
      <div className="MyAccount-Show-info">Avatar :</div>
      <div className="MyAccount-Show-info"><img className="MyAccount-Show-player-avatar" src={heroPicture} alt="Avatar Hero" /></div>
    </div>
  );
}

export default ShowAccount;
