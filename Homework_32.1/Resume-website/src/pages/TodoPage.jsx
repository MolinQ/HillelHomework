import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Todo() {
    return (
        <Container style={{marginTop:'20px'}}>
            <Typography variant="h4" gutterBottom >
                Todo List
            </Typography>
            <TextField
                label="New Task"
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" >
                Add
            </Button>
        </Container>
    );
};

export default Todo;