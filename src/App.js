import logo from './logo.svg';
import './App.css';
import Header from './containers/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import Cart from './containers/cart';
import Signup from './containers/Signup';
import {auth} from './containers/FirebaseSetup';

function App() {
  const isLogin = localStorage.getItem('token');
  
  return (
  
    <div className="App">
      <Router>
       <Switch>
       <Route exact path="/" component={Signup} />
       <div>
       <Header />
          <Route exact path="/home" component={ProductListing} />
          <Route exact path="/product/:Id" component={ProductDetail} />
          <Route exact path="/cart" component={Cart} />
          </div>
        </Switch>
        </Router>
    </div>
  )
}

export default App;
