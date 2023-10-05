import { useSelector } from 'react-redux';
import './BattleMode.scss';

function BattleMode() {
  const enemyName = useSelector((state) => state.game.currentNPC.name);

  // TODO
  // useEffect to make an API call, in order to :
  // - set Attacker and Defender,
  // - 
  return (
    <div className="BattleMode">
      <p>Vous débutez un combat avec {enemyName} !</p>
      <p></p>
    </div>
  );
}

export default BattleMode;
