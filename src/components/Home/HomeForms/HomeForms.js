import './HomeForms.scss';
import HomeFormsLogin from './HomeFormsLogin/HomeFormsLogin';
import HomeFormsSignin from './HomeFormsSignin/HomeFormsSignin';

function HomeForms() {
  
  return (
    <div className="HomeForms">
      <HomeFormsLogin />
      <HomeFormsSignin />
    </div >
  );
}

export default HomeForms;