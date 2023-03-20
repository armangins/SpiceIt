import React from "react";
import './button.styles.scss'

const Btn = (props) => {
    return (
        <button
            style={{ backGroundColor: `${props.color}` }}
            className={props.class}>
            {props.text}
        </button>
    )
}
export default Btn