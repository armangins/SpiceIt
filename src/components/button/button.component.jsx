import React from "react";
import './button.styles.scss'
import Button from '@mui/material/Button';

const Btn = (props) => {

    return (
        <Button sx={{ width: props.size }} variant="contained" size="large">
            {props.text}
        </Button>
    )
}

export default Btn