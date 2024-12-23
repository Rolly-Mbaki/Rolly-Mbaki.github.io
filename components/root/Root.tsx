import React from 'react'
import { Outlet } from 'react-router-dom'
import HEADER from '../header/Header'
import FOOTER from '../footer/Footer'

const ROOT = () => {
    return (
        <div className='appContainer'>
            <HEADER />
            <Outlet />
            <FOOTER />
        </div>
    )
}

export default ROOT