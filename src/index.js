import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.css';
import 'index.css';
import ErrorPage from 'pages/ErrorPage';
import Home from 'pages/Home';
import BeerList, { loader as allBeersLoader } from 'pages/BeerList';
import BeerItem, { loader as getSingleBeerLoader } from 'pages/BeerItem';
import NewBeer, { action as addNewBeerAction } from 'pages/NewBeer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/beers',
    element: <BeerList />,
    loader: allBeersLoader,
  },
  {
    path: '/beers/:id',
    element: <BeerItem />,
    loader: getSingleBeerLoader,
  },
  {
    path: '/new-beer',
    element: <NewBeer />,
    action: addNewBeerAction,
  },
  {
    path: '/random-beer',
    element: <BeerItem random />,
    loader: getSingleBeerLoader,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);
