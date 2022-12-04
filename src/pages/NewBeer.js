import { addNewBeer } from 'api';
import Layout from 'components/Layout/Layout';
import { Form, redirect } from 'react-router-dom';

export default function NewBeer() {
  return (
    <Layout>
      <div className="beerItem">
        <h2>New Beer</h2>
        <Form method="post" className="newBeerForm">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Name" />
          </div>

          <div>
            <label htmlFor="tagline">Tagline</label>
            <input type="text" name="tagline" placeholder="Tagline" />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <textarea
              type="textarea"
              name="description"
              cols={25}
              placeholder="Description"
            />
          </div>

          <div>
            <label htmlFor="brewers_tips">Brewers Tips</label>
            <textarea
              type="textarea"
              name="brewers_tips"
              cols={25}
              placeholder="Brewers Tips"
            />
          </div>

          <div>
            <label htmlFor="attenuation_level" className="">
              Attenuation Level
            </label>
            <input
              type="number"
              name="attenuation_level"
              id="attenuation_level"
              min="0"
              max="100"
            />
          </div>

          <div>
            <label htmlFor="image_url" className="">
              Image Url
            </label>
            <input type="text" name="image_url" placeholder="Image Url" />
          </div>

          <div>
            <button type="submit" className="btnSubmit">
              Add Beer
            </button>
          </div>
        </Form>
      </div>
    </Layout>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const beer = Object.fromEntries(formData);

  await addNewBeer(beer);
  return redirect(`/beers`);
}
