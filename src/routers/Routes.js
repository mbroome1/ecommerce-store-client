// import React from 'react';
// import { useSelector } from 'react-redux';
// import {BrowserRouter, Switch, Route} from 'react-router-dom';
// // import './App.css';

// import {Counter} from './../features/counter/Counter';
// import Nav from './../components/nav/Nav';
// import Home from './../features/home/Home';
// import Catalogue from './../components/catalogue/Catalogue';
// import NotFound from './../components/notFound/NotFound';
// import Login from './../components/auth/Login';
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';

// const Routes = () => {
//     const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

//         return (

//         <BrowserRouter>
//         {isAuthenticated && <Nav />}
//         <div className="App">
//           <Switch>
//             <Route  path="/" component={Home} />
//             {/* <PrivateRoute exact={true} isAuthenticated={isAuthenticated} path="/" component={Home} /> */}
//             <PrivateRoute exact={true} isAuthenticated={isAuthenticated} path="/catalogue" component={Catalogue} />

//             <Route path="/counter" exact>
//               <Counter />
//             </Route>
            
//             <PublicRoute exact={true} isAuthenticated={isAuthenticated} path="/login" component={Login} />
            
//             {/* <Route path="*">
//               <NotFound />
//             </Route> */}
//           </Switch>
//         </div>
//       </BrowserRouter>
//         )
//     }
// // }

// export default Routes;
