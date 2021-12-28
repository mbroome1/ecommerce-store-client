import { Container, Typography } from "@mui/material";
import React from "react";
import Hero from "./Hero";
import Welcome from "./Welcome";
 
const Home = () => {
    return (
        <Container maxWidth>
            <Typography variant="h2" sx={{fontSize: '48px', marginTop: '10px', textAlign: 'center', marginBottom: '40px'}}>Home</Typography>

            <Welcome />
            <Hero />
        </Container>
    )
}

export default Home;