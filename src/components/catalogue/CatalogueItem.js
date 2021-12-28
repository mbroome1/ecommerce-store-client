import { Box,Button, Card, CardActions, CardContent, CardHeader, CardMedia, Rating, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CatalogueItem = (props) => {
     const product = useSelector(state => state.products.productList.find(p => p.id === props.productId))
    
    return (
        <Card sx={{height:'100%', display: 'flex', flexDirection: 'column'}}>
            <CardMedia component="img" height="320px" image={`/images/${product.image}`} alt="photo" sx={{objectPosition: "50% 65%"}} />
            <CardHeader title={product.title} subheader={product.id} sx={{paddingBottom: '10px'}} titleTypographyProps={{fontSize:'1.2rem',color: 'primary'}}></CardHeader>
            <CardContent sx={{paddingTop: 0,paddingBottom: '5px', flex: '1'}}>
                <Typography variant="p">{product.description}</Typography>

            </CardContent>
            <CardActions sx={{justifyContent:'space-between'}}>
                <Box>
                    <Typography variant="h6" color="text.secondary" sx={{marginTop: '0px'}}>$ {product.price.toFixed(2)}</Typography>
                    <Rating name="read-only" defaultValue={3.5} precision={0.5} readOnly />
                </Box>
                <Button variant="contained" color="primary" component={Link} to={`/catalogue/${product.id}`}>View</Button>
            </CardActions>
        </Card>
    )
}

export default CatalogueItem;