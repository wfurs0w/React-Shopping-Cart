import { motion } from 'framer-motion';

import styles from './index.module.scss';

const Backdrop = ({ close, backdropClassName }) => {
  return (
    <motion.div
      key="backdrop"
      onClick={close}
      className={`${styles.backdrop} ${backdropClassName}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      exit={{ opacity: 0 }}
    />
  );
};

export default Backdrop;
