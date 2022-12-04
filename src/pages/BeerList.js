import { useLoaderData } from 'react-router-dom';
import { getAllBeers } from 'api';
import BeerListItem from 'components/beer-list-item/BeerListItem';
import Layout from 'components/Layout/Layout';
import { useState } from 'react';

export default function BeerList() {
  const [filter, setFilter] = useState('');
  const { allBeers } = useLoaderData();

  const filtered = Array.from(allBeers).filter((beer) =>
    beer.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Layout>
      <h2 className="text-center my-3">All Beers</h2>
      <div className="findBeer">
        <input
          type="text"
          name="q"
          placeholder="Find Beer"
          className="form-control"
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="beerListContainer">
        {filtered.map((beer) => (
          <BeerListItem key={beer._id} beer={beer} />
        ))}
      </div>
    </Layout>
  );
}

export async function loader() {
  const allBeers = await getAllBeers();
  return { allBeers };
}
