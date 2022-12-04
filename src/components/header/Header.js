import { Link } from 'react-router-dom';
import headerImg from 'assets/ih-header.png';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <Link to={'/'}>
        <img src={headerImg} alt="IronHack" className={styles.headerImg} />
      </Link>
    </div>
  );
}
