import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, {useEffect} from 'react';
import { useRef } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Redirect, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { postCart, toggleCartOpen } from '../../features/cart/cartSlice';
import { getProductById } from '../../features/products/productsSlice';

function Detail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const productId = Number.parseInt(id);
    const {productById, hasLoaded} = useSelector(state => state.products);
    let formattedPrice = 0;
    useEffect(() => {
        // if (productId>0) {\
            dispatch(getProductById(productId));
        // }
    }, [dispatch]);

    // console.log(productId);
    const [size, setSize] = React.useState('');
    const [qty, setQty] = React.useState('');




    const handleChangeSize = (e) => {
        setSize(e.target.value);
    };
    const handleChangeQty = (e) => {
        setQty(e.target.value);
    };

    const handleSubmit = async (e) => {
        const seq = productById.seq;
        e.preventDefault();
        if (size && qty) {
            const result = await dispatch(postCart({seq, qty, size}));
            
               const resultType = result.type;
               if (resultType === 'cart/post/fulfilled') {
                   dispatch(toggleCartOpen());
               }
        }
    }
    if (productById.price > 0) {
        formattedPrice = productById.price.toFixed(2);
    }
    if (hasLoaded) {
        if (!productById) {
            // return <Redirect to={"/catalogue"} />
        }
        return (
        <Container>
            <Button to="/catalogue" component={Link} sx={{marginTop: '20px'}}>Back to Catalogue</Button>
            <Box sx={{textAlign: 'center', margin: '50px 0'}}>
                <Typography variant="h2">{productById.title }</Typography>
                <Typography variant="h6" color="text.secondary">{productById.id }</Typography>
            </Box>
            <Grid container spacing={6} sx={{paddingBottom: '60px'}}>
                <Grid item xs={12} md={5}>
                <Box sx={{}}>
                    <Box component="img" src={`/store/images/${productById.image}`} sx={{width:'100%',height: 'auto', objectFit: 'cover'}}></Box>
                </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    {/* <Typography variant="h6">{productById.seq }</Typography> */}
                    <Typography variant="h4" sx={{}}>{productById.description }</Typography>
                    <Typography variant="h5" sx={{marginTop: '20px', marginBottom: '20px'}}>${formattedPrice}</Typography>

                    <form method="post" onSubmit={handleSubmit}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="select-size-label">Size</InputLabel>
                        <Select
                            labelId="select-size-label"
                            id="select-size"
                            value={size}
                            onChange={handleChangeSize}
                            label="Size"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'S'}>S</MenuItem>
                            <MenuItem value={'M'}>M</MenuItem>
                            <MenuItem value={'L'}>L</MenuItem>
                            <MenuItem value={'XL'}>XL</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="select-qty-label">Qty</InputLabel>
                        <Select
                            labelId="select-qty-label"
                            id="select-qty"
                            value={qty}
                            onChange={handleChangeQty}
                            label="Qty"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                        </Select>
                    </FormControl>

                    <Box>
                        <Button type="submit" variant="contained" sx={{marginTop: '30px'}}>Add to Cart</Button>
                    </Box>
                    </form>
                </Grid>
            </Grid>
        </Container>
        )
    } else {
        return  (<div>Loading...</div>)
    }

}

export default Detail;
