import React from 'react'

 const BoxStyle = (props) => {

    const boxStyle = {
        // border: "2px, solid, black",
        margin: "20px",
        width: parseInt(props.width),
        height: parseInt(props.width),
        backgroundColor: props.color,
    }

    return (
        <div style = {boxStyle}></div>
    )
}

export default BoxStyle;


