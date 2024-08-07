import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Home() {
    return (
        <Container>
            <Typography variant="h4" gutterBottom style={{marginTop:'20px'}}>
                About me
            </Typography>
            <Typography variant="body2" paragraph style={{fontSize:'20px'}}>
                I am a frontend developer with experience more than 1 year.
                I have experience in creating both simple user interfaces and multifunctional applications.
                I love working in a team and as an employee, I approach my work responsibly.
                I never stop learning and try to improve my knowledge.
                I take any task responsibly and do my best to achieve the best result.
            </Typography>
            <Typography variant="h4" gutterBottom>
                Stack
            </Typography>
            <Typography variant="body1" paragraph>
                - JavaScript (React, Angular)<br/>
                - HTML, CSS (SASS, LESS)<br/>
                - Backend (Node.js)<br/>
                - WebPack,gulp
            </Typography>
        </Container>
    );
};

export default Home;