import React from 'react'
import { NavLink } from 'react-router-dom'
export default function NarBar() {

    return (
        <nav className='narbar'>
            <>
                <NavLink className='btn-navegation' to="/">Home</NavLink>

                <NavLink className='btn-navegation' to="counter-click">Counter click</NavLink>
                <NavLink className='btn-navegation' to='gallery'>Gallery</NavLink>
                <NavLink className='btn-navegation' to='calculate'>Calculate</NavLink>
                <NavLink className='btn-navegation' to='login'>Login</NavLink>

            </>
        </nav>
    )
}   
