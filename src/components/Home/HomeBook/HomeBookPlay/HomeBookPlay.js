import { NavLink } from 'react-router-dom';
import './HomeBookPlay.scss';
import { motion } from 'framer-motion';

export default function HomeBookPlay() {
  return (
    <NavLink to="/game" className="HomeBookPlay">
      <motion.div
        className="HomeBookPlay-title"
        initial={{
          scale: 1
        }}
        whileHover={{
          scale: 1.05
        }}
        whileTap={{
          scale: 0.9
        }}
        transition={{
          duration: 0.15
        }}
      >
        Jouer !
      </motion.div>
    </NavLink>
  );
}
