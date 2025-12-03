import { useEffect, useState } from 'react'
import './Header.css'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const HEADER = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true)
      setIsOpen(false)
    } else {
      setIsMobile(false)
      setIsOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  if (isMobile) {
    return (
      <div className='navbarMobile'>
        {
          !isOpen
            ?
            (
              <div className='navbarBtn' onClick={() => setIsOpen(true)}>
                <FaBars />
              </div>
            )
            :
            (
              <div  className={`navbarMobileContent ${isOpen ? "open" : ""}`}>
                <button>Web Projects</button>
                <button>Graphic Designs</button>
                <button>About me</button>
                <button>Contact</button>
                <button onClick={() => setIsOpen(false)}>X</button>
              </div>
            )
        }
      </div>
    )
  }

  return (
    <div className='navbar'>
      <div className='navbarLink'>
        <Link to="/">Home</Link>
      </div>
      <div className='navbarLink'>
        <Link to="webProjects">Web Projects</Link>
      </div>
      <a className='navbarLink' href="">Graphic Designs</a>
      <a className='navbarLink' href="">About me</a>
      <a className='navbarLink' href="">Contact</a>
    </div>
  )
}

export default HEADER