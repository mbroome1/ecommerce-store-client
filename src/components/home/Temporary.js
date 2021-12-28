import { Card, CardContent, CardHeader, Paper, Typography } from '@mui/material'
import { Box, } from '@mui/system'
import React from 'react'

function Temporary() {
    return (
        <Box sx={{marginTop:'60px'}}>
            <Card>
                <CardHeader
                    action="link icon"
                    title="card header title"
                    subheader="sub header text"
                    avatar="avatar"
                >
                </CardHeader>
                <CardContent>
                    <Typography variant="h1">Heading 1</Typography>
                    <Typography variant="h2">Heading 2</Typography>
                    <Typography variant="h3">Heading 3</Typography>
                    <Typography variant="h4">Heading 4</Typography>
                    <Typography variant="h5">Heading 5</Typography>
                    <Typography variant="h6">Heading 6</Typography>
                    <Typography variant="body1">Body paragraph 1</Typography>
                    <Typography variant="body2">Body paragraph 2</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Temporary
