import './App.css';
import Home from './Home';
import Header from './Header';
import Checkout from './Checkout';
import Login from './Login';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const stripePromise = loadStripe()

function App() {
  
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/stripe'>
            <Elements stripe={stripePromise} >
              <CheckoutForm />
            </Elements>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>

          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
