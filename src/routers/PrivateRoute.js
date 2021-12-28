import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { checkAuth} from './../features/auth/authSlice';

const PrivateRoute = ({ 
    isAuthenticated,
    component: Component, 
    ...rest
}) => {
    let location = useLocation();
    // console.log(location);
  //  const [loading, setLoading] = useState(true);
    const isLoading = useSelector(state => state.auth.isLoading);
  //   // const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  useEffect(() => {
    const dispatchAuth = async () => {
        // console.log("Called once");

      await dispatch(checkAuth());
    } 
      dispatchAuth();
    // return () => {
    //   cleanup
    // }
  },[dispatch,location,isAuthenticated]);

    if (isLoading) {
        // return <p>Loading... PRivate Route</p>
        return null
    } else {
        return (
            <Route {...rest} 
                component=
                {
                    props => isAuthenticated ? <Component {...props} /> : <Redirect to="/login" /> 
                }
            />
        )
    }

}

export default PrivateRoute
