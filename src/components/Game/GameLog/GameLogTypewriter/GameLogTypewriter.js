import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTypewriting } from '../../../../actions/game';

function GameLogTypewriter({ text, identifier }) {
  const dispatch = useDispatch();
  const typewriting = useSelector((state) => state.game.typewriting[identifier]);
  const visibleChoices = useSelector((state) => state.game.visibleChoices);
  const index = useRef(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    dispatch(setTypewriting(identifier, true));
    index.current = 0;
    setCurrentText('');
  }, [text]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const char = text.charAt(index.current);
      setCurrentText((value) => value + char);
      index.current += 1;

      if (index.current === text.length) {
        dispatch(setTypewriting(identifier, false));
      }
    }, (typewriting && !visibleChoices) ? 35 : 0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentText, text]);

  return currentText;
}

export default GameLogTypewriter;
