import { Button } from "@mui/material";

function ButtonSubmit(props) {
    const {type} = props
    return(
        <>
            <Button type={type}  variant="outlined">Send</Button>
        </>
    )
}

export default ButtonSubmit