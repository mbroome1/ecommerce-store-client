import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { checkAuth, loginRequest } from '../../features/auth/authSlice';
import './login.css';

import Button from '@mui/material/Button';
import { ButtonGroup, Chip, Container, Divider, TextField, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { Box } from '@mui/system';


const Login = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginRequest({username,email,password}))
    }
    
    const handleCheckAuth = async (e) => {
        try {
            const res = await dispatch(checkAuth);
            // console.log("handle click result:", res);
        } catch (err) {
            // console.log("handle click error:", err.message);

        }
    }
    return (
        <Container maxWidth="sm">
            <Box sx={{marginTop: '60px',}}>
                <Typography variant="h2" component="h2" color="#283593" gutterBottom sx={{fontSize: '48px', textAlign: 'center'}}>Login</Typography>
                <Typography variant="h6" component="h6" color="textSecondary" gutterBottom sx={{fontSize: '12px', textAlign: 'center'}}>test account: test / test</Typography>
            </Box>

            <Box>
                <form method="post" onSubmit={handleSubmit}>
                    <Box sx={{
                        my:1,
            
                    }}>
                        <TextField fullWidth variant="filled" type="text" label="Username" onChange={(e) => setUsername(e.target.value)} name="username" id="username" value={username}/>
                    </Box>
                    
                    {/* <Divider>
                        <Chip label="AND" />
                    </Divider> */}

                    {/* <Box sx={{
                        mt:1
                    }}>
                        <TextField fullWidth variant="filled" type="email" label="Email" onChange={(e) => setEmail(e.target.value)} name="email" id="email"  value={email} />
                    </Box> */}

                    <Box sx={{
                        mt:4
                    }}>
                        <TextField fullWidth variant="filled" type="password" label="Password" onChange={(e) => setPassword(e.target.value)} name="password" id="password" value={password}/>
                    </Box>
                    <Box sx={{
                        mt:4,
                    }}>
                        {/* <input type="submit" name="login" id="login" value="Login" /> */}

                        <Button fullWidth type="submit" id="login" name="login" variant="contained" endIcon={<LoginIcon fontSize="small"/>}>Login</Button> 
                        {/* <Button type="button" onClick={handleCheckAuth} variant="text">Check Auth Status</Button> */}
                    </Box>
                    
                </form>
            </Box>

        </Container>
    )
}
// {
//     mr:2, 
//     background:'#283593',
//     '&:hover': {
//         background: '#3949ab'
//     } 
// }
export default Login;
