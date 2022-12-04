import { useLoaderData } from 'react-router-dom';
import { getBeer } from 'api';
import Layout from 'components/Layout/Layout';

export default function BeerItem({ random }) {
  const { beer } = useLoaderData();

  const {
    image_url,
    name,
    tagline,
    contributed_by,
    first_brewed,
    attenuation_level,
    description,
  } = beer;

  return (
    <Layout>
      <div className="beerItem">
        {random && <h1>Random Beer</h1>}
        <div className="listImgContainer">
          <img className="listImg" src={image_url} alt={name} />
        </div>
        <div className="listBodyContainer">
          <div className="beerNameContainer">
            <h5 className="listHeader">{name}</h5>
            <span className="attenuationLevel">{attenuation_level}</span>
          </div>
          <div className="taglineContainer">
            <div className="tagline">{tagline}</div>
            <div className="firstBrewed">{first_brewed}</div>
          </div>
          <div className="descriptionContainer">
            <p>{description}</p>
          </div>
          <div className="contributedBy">
            <strong>Created by: </strong>
            {contributed_by}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function loader({ params }) {
  const beer = await getBeer(params.id);

  return { beer };
}
