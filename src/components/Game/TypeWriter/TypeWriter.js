import { useState, useEffect, useRef } from 'react';

function TypeWriter({ text }) {
  const index = useRef(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    index.current = 0;
    setCurrentText('');
  }, [text]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const char = text.charAt(index.current);
      setCurrentText((value) => value + char);
      index.current += 1;
    }, 50);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentText, text]);

  return <p>{currentText}</p>;
}

export default TypeWriter;
