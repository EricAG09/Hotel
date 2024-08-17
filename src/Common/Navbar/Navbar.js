import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <>
      <nav className='navbar'>
        <div className='container flex_space'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : " fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to='/' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' onClick={closeMobileMenu}>
                Sobre
              </Link>
            </li>
            <li>
              <Link to='/gallery' onClick={closeMobileMenu}>
                Galeria
              </Link>
            </li>
            <li>
              <Link to='/destinations' onClick={closeMobileMenu}>
                Destinos
              </Link>
            </li>
            <li>
              <Link to='/blog' onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link to='/testimonial' onClick={closeMobileMenu}>
                Depoimentos
              </Link>
            </li>
            <li>
              <Link to='/contact' onClick={closeMobileMenu}>
                Contato
              </Link>
            </li>
          </ul>

          <div className='login-area flex'>
            <li>
              <Link to='/sign-in'>
                <i class='far fa-chevron-right'></i>Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <i class='far fa-chevron-right'></i>Cadastrar
              </Link>
            </li>
            <li>
              <Link to='/contact'>
                <button className='primary-btn'>Solicite um Orçamento</button>
              </Link>
            </li>
          </div>
        </div>
      </nav>

      <header>
        <div className='container flex_space'>
          <div className='logo'>
            <Link to='/'><h1>Hotel</h1></Link> 
          </div>

          <div className='contact flex_space '>
            <div className='box flex_space'>
              <div className='icons'>
                <i class='fal fa-clock'></i>
              </div>
              <div className='text'>
                <h4>Horários</h4>
                <Link to='/contact'>Segunda a Domingo: 9h00 às 18h00</Link>
              </div>
            </div>
            <div className='box flex_space'>
              <div className='icons'>
                <i class='fas fa-phone-volume'></i>
              </div>
              <div className='text'>
                <h4>Ligue</h4>
                <Link to='/contact'>+011 123 4567</Link>
              </div>
            </div>
            <div className='box flex_space'>
              <div className='icons'>
                <i class='far fa-envelope'></i>
              </div>
              <div className='text'>
                <h4>Email</h4>
                <Link to='/contact'>hotel@gmail.com</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
