import React from 'react'

const Alert = (props) => {
    const capitalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <div class={`alert alert-${props.alert.typ} alert-dismissible fade show container my-2`} role="alert">
        <strong>{capitalize(props.alert.typ)}</strong>: {props.alert.msg}
        </div>
    )
}

export default Alert
