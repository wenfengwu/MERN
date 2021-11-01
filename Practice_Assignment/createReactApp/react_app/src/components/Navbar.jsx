import React, { useContext } from 'react'
import Wrapper from './context/Wrapper'

const Navbar = () => {
    const context = useContext(Wrapper)

    return (
        <div style = {{background: "purple"}}>
            <p>Hi {context.name} !</p>
        </div>
    )
}

export default Navbar;
