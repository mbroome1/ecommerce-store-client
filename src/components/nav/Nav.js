import { AppBar, Badge, Button, IconButton, Link, Toolbar, Typography } from "@mui/material";
import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import './nav.css';
import Menu from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from "react-redux";
import { logoutRequest } from "../../features/auth/authSlice";
import { getCart, toggleCartOpen } from "../../features/cart/cartSlice";
import CartCounter from "../cart/CartCounter";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CottageIcon from '@mui/icons-material/Cottage';

const Nav = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    const handleToggleDrawer = (event) => {
    dispatch(toggleCartOpen())
    };

    const handleLogout = () => {
        dispatch(logoutRequest());
    };

    useEffect(() => {
        dispatch(getCart());
        return () => {
            
        }
    }, []);
    return (
        // <AppBar position="static" sx={{backgroundColor: '#283593'}}>
        <AppBar position="static" sx={{backgroundColor:'primary'}}>
            <Toolbar>
                {/* <IconButton color="inherit">
                    <Menu />
                </IconButton> */}
                <Typography variant="h6" style={{flexGrow: 1}}>Web Store</Typography>
                <Button to="/" activeClassName="is-active" component={NavLink} color="inherit" sx={{marginRight: '10px'}}><CottageIcon /></Button>
                <Button to="/catalogue" activeClassName="is-active" component={NavLink} color="inherit"><MenuBookIcon /></Button>
                {/* <Button to="/counter" activeClassName="is-active" component={NavLink} color="inherit">Counter</Button> */}


                <IconButton onClick={handleToggleDrawer} aria-label="cart" color="inherit" sx={{margin:'0 25px'}}>
                    <Badge badgeContent={<CartCounter />} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>


                {
                isAuthenticated 
                    ? <Button onClick={handleLogout} activeClassName="is-active" color="inherit">Logout</Button> 
                    : <Button to="/login" activeClassName="is-active" component={NavLink} color="inherit">Login</Button>
                }
                
            </Toolbar>

      </AppBar>
    )
}

export default Nav;