import { Link } from 'react-router-dom';
import styles from './BeerListItem.module.css';
export default function BeerListItem({ beer, single }) {
  const {
    _id: id,
    image_url,
    name,
    tagline,
    contributed_by,
    first_brewed,
    attenuation_level,
    description,
  } = beer;

  return (
    <Link to={`/beers/${id}`}>
      <div className={styles.beerListItem}>
        <div className={styles.listImgContainer}>
          <img className={styles.listImg} src={image_url} alt={name} />
        </div>
        <div className={styles.listBodyContainer}>
          <div className={styles.beerNameContainer}>
            <h5 className={styles.listHeader}>{name}</h5>
            {single && (
              <span className={styles.attenuationLevel}>
                {attenuation_level}
              </span>
            )}
          </div>
          <div className={styles.taglineContainer}>
            <p className={styles.tagline}>{tagline}</p>
            {single && (
              <span className={styles.firstBrewed}>{first_brewed}</span>
            )}
          </div>
          {single && (
            <div className={styles.descriptionContainer}>
              <p>{description}</p>
            </div>
          )}
          <div className={styles.contributedBy}>
            <strong>Created by: </strong>
            {contributed_by}
          </div>
        </div>
      </div>
    </Link>
  );
}
