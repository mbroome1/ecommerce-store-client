import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { deleteCartItemById, getCart, toggleCartOpen, updateCartItemById } from '../../features/cart/cartSlice';
import CartCounter from './CartCounter';

import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, FormControl, Grid, IconButton, InputLabel, List, ListItem, ListItemAvatar, ListItemIcon, ListItemSecondaryAction, ListItemText, MenuItem, Select, Typography} from '@mui/material';
import { Box } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import CartTotal from './CartTotal';
import { checkAuth } from '../../features/auth/authSlice';

function Cart() {
    // const [cartItems, setCartItems] = React.useState([]); // For quantity onchange event
    
    const dispatch = useDispatch();
    const {cartList, hasLoaded, error} = useSelector(state => state.cart);
    // const authError = useSelector(state => state.auth.error);
    

    
    // useEffect(() => {
    //         // cartList.map(c => setCartItems(currentArray => [...currentArray, {id: c.cartItem.id, quantity: c.cartItem.quantity}]));
    //     },[])
    
    const handleRemove = (cartItemId) => {
        // console.log(seq);
        dispatch(deleteCartItemById(cartItemId));
        // dispatch(getCart());

    }
    
    const handleChangeQty = (e, id) => {
        const quantity = e.target.value;
        // console.log(id, quantity);
        dispatch(updateCartItemById({id,quantity}));
    }

    const handleCloseCart = () => {
        dispatch(toggleCartOpen());
    }

    useEffect(() => {
        dispatch(getCart());
    }, []);
    // console.log(cartItems);
    if (error) {
        return <div>{error}</div>
    }
    if (hasLoaded) {
        return (
            <Box>
                <Box sx={{padding: '5px'}}>
                    <IconButton onClick={handleCloseCart}>
                        <CloseIcon sx={{fontSize: 30 }} />
                    </IconButton>
                </Box>
                <Container maxWidth="lg">

                <Typography variant="h2" sx={{fontSize: '48px', marginTop: '10px', textAlign: 'center'}}>Cart</Typography>
                <List>
                {
                        cartList.length > 0 ? (
                            cartList.map(c => {
                                const qtySelectAmount = [];
                                let qtyBoxAmount = c.cartItem.quantity < 10 ? 10 : c.cartItem.quantity + 5;
                                while (qtyBoxAmount>0) {
                                    qtySelectAmount.unshift(qtyBoxAmount);
                                    qtyBoxAmount--;
                                }
                                
                                return <ListItem key={c.id+"-"+c.cartItem.size} alignItems="flex-start" sx={{margin: "15px 0", padding: "0 0"}}>

                                    <Card sx={{display: 'flex'}}>
                                       <Box sx={{height: '140px', width: '115px'}}>
                                            <CardMedia 
                                            component="img" 
                                            image={`/store/images/${c.image}`} alt="photo"
                                            height="100%"
                                            >
                                            </CardMedia>


                                        </Box>

                                        <Box sx={{flex: '1 0 auto',display: 'flex', flexDirection: 'column', background: 'none', padding: '5px 15px', minWidth: '280px', maxWidth: '400px'}}>

                                                <Box sx={{background: 'none'}}>
                                                    <Typography component="p" variant="h6" color="primary">{c.title}</Typography>
                                                </Box>

                                                <Box sx={{display: 'flex', flex: '1', background: 'none', alignItems: 'center'}}>
                                                    <Box sx={{flex: '2'}}>
                                                        <Typography variant="body1" color="text.secondary">{c.id}</Typography>
                                                        <Typography component="p" variant="p" sx={{paddingTop: '5px'}}>{c.cartItem.size}</Typography>
                                                        <Typography component="p" variant="p" sx={{paddingTop: '5px'}} color="primary">$ {c.price.toFixed(2)}</Typography>
                                                    </Box>

                                                    <CardActions sx={{flex:'1'}}>
                                                        <FormControl variant="standard">
                                                                <Select
                                                                    labelId="quantity-select-label"
                                                                    id="quantity-select"
                                                                    value={c.cartItem.quantity}
                                                                    onChange={(e) => handleChangeQty(e, c.cartItem.id)}
                                                                >
                                                                    {
                                                                        qtySelectAmount.map(qty => <MenuItem key={`${c.cartItem.size}-${qty}`}value={qty}>{qty}</MenuItem>)
                                                                    }
                                                                
                                                                </Select>
                                                        </FormControl>   

                                                        </CardActions>

                                                    <Box>
                                                        <IconButton onClick={()=>handleRemove(c.cartItem.id)}>
                                                            <DeleteIcon color="error" />
                                                        </IconButton>
                                                    </Box>

                                                </Box>

                                        </Box>
                                    </Card>

                                </ListItem>
                            })
                            ) : (
                            <ListItem>
                                <Box>No items in cart</Box>
                            </ListItem>
                        )
                        
                }
                </List>
                {
                    cartList.length 
                    ?   <>
                            <Box sx={{textAlign:'left'}}> 
                                <Typography variant="p">Total Items: <CartCounter /></Typography>
                            </Box>
                            <Box sx={{textAlign:'left', marginTop:'10px'}}>
                                <Typography variant="h6" sx={{}}>Total Price: $ <CartTotal /></Typography>
                            </Box>
                        </>
                    : null
                }
            </Container>
            </Box>

        )
    } else {
        return  (<div>Loading...</div>)
    }
}

export default Cart;
