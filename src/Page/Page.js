import React from "react";
import {Box, Button,Typography } from "@mui/material";

const  Page = () => {
    return(
        <Box>
            <Typography variant="h1" color="primary">
                Welcome to Custom Themed App
            </Typography>
            <Button variant="contained" color="secondary">
                Custom Button
            </Button>
        </Box>
    )
}

export default Page; 