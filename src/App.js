import './App.css';
import { Link } from 'react-router-dom';

function App() {
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
