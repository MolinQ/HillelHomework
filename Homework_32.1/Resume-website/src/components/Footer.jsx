import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Footer() {
    return (
        <Box component="footer" py={3} textAlign="center">
            <Typography variant="body1">
                Contacts: kirillaidr@gmail.com <br/>
                phone: +0663908831
            </Typography>
        </Box>
    );
};

export default Footer;