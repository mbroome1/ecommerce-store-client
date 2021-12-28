import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {getProducts} from "./../../features/products/productsSlice";
import CatalogueItem from "./CatalogueItem";
import { Container, Grid, Typography } from "@mui/material";

const Catalogue = () => {
    const dispatch = useDispatch();
    const {productList, hasLoaded} = useSelector(state => state.products);

    
    useEffect(() => {
        console.log('rendered catalogue')
        dispatch(getProducts());
    }, [])


    if (hasLoaded) {
        return (
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{fontSize: '48px', marginTop: '10px', textAlign: 'center'}}>Catalogue</Typography>
                <Grid container spacing={3} sx={{marginTop: '20px'}}>
                    {
                        productList.map(product => (
                            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                <CatalogueItem key={product.id} productId={product.id} productSeq={product.seq} /> 
                            </Grid>
                            )
                        )
                    }
                </Grid>

            </Container>
        )
    } else {
        return  (<div>Loading...</div>)
    }
}
export default Catalogue;