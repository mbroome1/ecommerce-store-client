import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Typography,Box, Button, Paper, ButtonBase } from "@mui/material";
import {styled } from '@mui/system';
// import heroImage from './../../images/hero.jpg';

const StyledHero = styled(Paper, {})(({theme}) =>({
    // height: '20vh',
    height: '30vh',
    // background: `url(${heroImage})`,
    background: `url('/store/images/hero.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    color: '#fff',
    [theme.breakpoints.up('md')]: {
        height: '50vh'
    },
    [theme.breakpoints.up('xl')]: {
        height: '60vh'
    }
}));

const StyledHeroButton = styled(ButtonBase, {})({
    background: '#fff',
    border: '2px solid #fff',
    padding: '10px 15px',
    fontSize: '24px',
    borderRadius: '3px',
    color: '#444',
    '&:hover': {
        background: '#eee',
        borderColor: '#eee'
    }
});

function Hero() {
    return (
        <StyledHero elevation={1} color="secondary" sx={{marginTop: '40px'}}>
            <Box sx={{background:'rgba(0,0,0,0.5)',height: '100%',width: '100%', display:'flex',alignItems: 'center'}}>
                <Box sx={{width:'100%', textAlign: 'center'}}>
                    <Typography variant="h3">Check Out The Latest Offers!</Typography>
                    <Box sx={{marginTop:'50px'}}>
                        <StyledHeroButton component={Link} to="/catalogue" variant="outlined"  size="large">Shop Now!</StyledHeroButton>
                    </Box>
                </Box>
            </Box>


        </StyledHero>
    )
}

export default Hero
