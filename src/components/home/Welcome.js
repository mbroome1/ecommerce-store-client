import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Typography,Box, Button, Paper } from "@mui/material";
import {styled } from '@mui/system';


const Welcome = () => {
    return (
        <Box>
            <Typography variant="h5">Hello <Typography variant="span" color="primary">Test Case,</Typography></Typography>
            <Typography variant="h4" sx={{marginTop: '10px'}}>Welcome to the store!</Typography>
        </Box>

    )
}

export default Welcome
