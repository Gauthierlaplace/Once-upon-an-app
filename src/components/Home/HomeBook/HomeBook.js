import HomeBookLogin from './HomeBookLogin/HomeBookLogin';
import HomeBookRegister from './HomeBookRegister/HomeBookRegister';

import './HomeBook.scss';

function HomeBook() {
  return (
    <div className="HomeBook">
      <HomeBookLogin />
      <HomeBookRegister />
    </div>
  );
}

export default HomeBook;
