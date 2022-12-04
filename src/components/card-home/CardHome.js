import { Link } from 'react-router-dom';
import styles from './CardHome.module.css'

export default function CardHome({ page }) {
  const { id, img, title, text } = page;
  
  return (
    <div className={styles.cardHome}>
      <Link to={id}>
        <img className={styles.cardHomeImg} src={img} alt={img} />
        <h1>{title}</h1>
        <p>{text}</p>
      </Link>
    </div>
  );
}
