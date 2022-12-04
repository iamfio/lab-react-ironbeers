import CardHome from 'components/card-home/CardHome';
import beersPng from 'assets/beers.png';
import newBeerPng from 'assets/new-beer.png';
import randomBeerPng from 'assets/random-beer.png';

const homePage = [
  {
    id: 'beers',
    img: beersPng,
    title: 'All Beers',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, neque praesentium eaque illo ipsam, rem omnis dolorum officiis odio deserunt.',
  },
  {
    id: 'random-beer',
    img: randomBeerPng,
    title: 'Random Beer',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, neque praesentium eaque illo ipsam, rem omnis dolorum officiis odio deserunt.',
  },
  {
    id: 'new-beer',
    img: newBeerPng,
    title: 'New Beer',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, neque praesentium eaque illo ipsam, rem omnis dolorum officiis odio deserunt.',
  },
];

export default function Home() {
  return (
    <div className="d-flex flex-sm-row flex-column flex-wrap justify-content-center align-items-center">
      {homePage.map((page) => (
        <CardHome key={page.id} page={page} />
      ))}
    </div>
  );
}
