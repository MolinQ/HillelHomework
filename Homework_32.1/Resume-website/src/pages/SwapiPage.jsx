import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Swapi() {
    return (
        <Container className='container input-group mb-3 mt-4'>
            <Typography variant="h4" gutterBottom>
                Swapi
            </Typography>
            <Box display="flex" alignItems="center" mb={3}>
                <Typography variant="body1" className='label p-3'>
                    https://swapi.dev/api/
                </Typography>
                <TextField
                    variant="outlined"
                    placeholder="people/1/"
                    className='form-control'
                />
                <Button variant="outlined" className="btn btn-primiry">
                    Get info
                </Button>
            </Box>
        </Container>
    );
};

export default Swapi;