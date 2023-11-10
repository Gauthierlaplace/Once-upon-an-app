import { useEffect } from 'react';
// import { useSelector } from 'react-redux';

export default function ScrollToTop({ trigger }) {
//   const event = useSelector((state) => state.game.currentEvent.id);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('le useEffect se déclenche');
  }, [trigger]);

  return null;
}
