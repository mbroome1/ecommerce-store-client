import { Button, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material'
import { Box  } from '@mui/system';
import React , {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { checkAuth } from '../../features/auth/authSlice';
import {toggleCartOpen} from './../../features/cart/cartSlice';
import Cart from './Cart';

function CartDrawer() {
    const {cartOpen} = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const toggleDrawer = (event) => {
        dispatch(toggleCartOpen())
    };

    useEffect(() => {

      return () => {
        
      }
    }, [])
    
      return (
        <div>
            <Drawer 
                anchor={'right'}
                open={cartOpen}
                onClose={()=>toggleDrawer()}
              >
                <Cart />
            </Drawer>
        </div>
      );
}

export default CartDrawer
