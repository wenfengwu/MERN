import React, {useContext} from 'react'
import Wrapper from './context/Wrapper'

const Form = () => {

    const context = useContext(Wrapper)

    return (
        <div>
            <label>Your Name: </label>
            <input type="text" onChange = {(e) => context.setName(e.target.value)}/>
        </div>
    )
}

export default Form;