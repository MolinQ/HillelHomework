import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Footer() {
    return (
        <Box component="footer" py={3} textAlign="center">
            <Typography variant="body1">
                Contacts: <br/>
                Email: kirillaidr@gmail.com <br/>
                Phone: +0663908831
            </Typography>
        </Box>
    );
};

export default Footer;