import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import {Counter} from './features/counter/Counter';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Catalogue from './components/catalogue/Catalogue';
import NotFound from './components/notFound/NotFound';
import Login from './components/auth/Login';

import PrivateRoute from './routers/PrivateRoute';
import PublicRoute from './routers/PublicRoute';
import Detail from './components/catalogue/Detail';
import Cart from './components/cart/Cart';
import CartDrawer from './components/cart/CartDrawer';


function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <>
      {/* <Routes />
       */}
      <Router>
        {isAuthenticated && <Nav />}
        <div className="App">
          <Switch>
            <PrivateRoute exact={true} isAuthenticated={isAuthenticated} path="/" component={Home} />
            <PrivateRoute exact={true} isAuthenticated={isAuthenticated} path="/catalogue" component={Catalogue} />
            <PrivateRoute exact={true} isAuthenticated={isAuthenticated} path="/catalogue/:id" component={Detail} />
            {/* <PrivateRoute exact={true} isAuthenticated={isAuthenticated} path="/cart" component={Cart} /> */}

            {/* <Route path="/counter" exact>
              <Counter />
            </Route> */}
            
            <PublicRoute exact={true} isAuthenticated={isAuthenticated} path="/login" component={Login} />
            
            <PublicRoute exact={true} isAuthenticated={isAuthenticated} path="/error" component={NotFound} />

            <Route>
              <NotFound />
            </Route>

          </Switch>
        </div>
        {isAuthenticated && <CartDrawer />}
      </Router>
    </>
  );
}

export default App;