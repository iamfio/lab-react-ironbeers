import './App.css';
import { useEffect, useState } from 'react';
import { getAllBeers } from './api';
import { Link } from 'react-router-dom';

function App() {
  // const [beers, setBeers] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   // const loadBeers = async () => {
  //   //   setLoading(true);
  //   //   const response = await getAllBeer();
  //   //   setBeers(response);
  //   //   setLoading(false);
  //   // };
  //   // loadBeers()

  //   (async () => {
  //     setLoading(true);
  //     setBeers(await getAllBeers());
  //     setLoading(false);
  //   })();
  // }, []);
  // console.log(beers.map((b) => b.name));

  return (
    <div className="container text-center">
      <div className="row h-50 ">
        <div className="col-12 mt-12">
          <div className="w-100">
            <div className="display-1">IronBeers</div>
            <div className="display-3 my-5">🍻</div>
            <div className="container btn-container">
              <Link to="/home" className="btn btn-lg btn-primary">
                Enter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
