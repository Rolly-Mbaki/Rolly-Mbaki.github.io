import React from 'react'
import './Footer.css'

const FOOTER = () => {
  return (
    <div className='footerContainer'>
        <div className='footerDetails'>
            <p className='footerLabel'>E-Mail</p>
            <a href="mailto:rollymbakii@gmail.com">RollyMbakii@gmail.com</a>
        </div>
        <div className='footerDetails'>
            <p className='footerLabel'>Location</p>
            <p>Antwerp, Belgium</p>
        </div>
    </div>
  )
}

export default FOOTER