import { TextField } from "@mui/material";
function Input({ field, form, ...props }) {
    return (
        <div style={{ marginTop: '4rem', width:'100%'}}>
            <TextField
                style={{width:'100%'}}
                id="outlined-basic"
                label="Post text"
                variant="outlined"
                {...field}
                {...props}
                error={form.touched[field.name] && !!form.errors[field.name]}
                helperText={form.touched[field.name] && form.errors[field.name]}
            />
        </div>
    );
}

export default Input;