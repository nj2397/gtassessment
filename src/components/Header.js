import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import "./Header.css";

const Header = () => {
    //Header with Logo (or Brand) and Nav buttons
    return (
        <Box className="navheader">
            <p className="brand">GT Mutual Funds</p>
            <Stack direction="row" spacing={1}>
                <Button variant="outlined" color="secondary">Home</Button>
                <Button variant="outlined" color="secondary">Special</Button>
                <Button variant="outlined" color="secondary">Contact</Button>
            </Stack>
        </Box>
    )
}

export default Header;