import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2>SOBRE NÓS</h2>
            <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet consectetur scing elit amet consectetur adipiscing elit sed et eletum.</p>
            <br />
            <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet consectetur scing elit amet.</p>
            <div className='icon flex_space'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-instagram'></i>
              <i className='fab fa-pinterest'></i>
              <i className='fab fa-youtube'></i>
            </div>
          </div>

          <div className='box'>
            <h2>
            NAVEGAÇÃO</h2>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>Sobre nós</Link>
              </li>
              <li>
                <Link to='/gallery'>Galeria</Link>
              </li>
              <li>
                <Link to='/destinations'>Destinos</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <Link to='/testimonial'>Depoimentos</Link>
              </li>
              <li>
                <Link to='/contact'>Contato</Link>
              </li>
            </ul>
          </div>

          <div className='box post'>
            <h2>Posts recentes</h2>
            <ul>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2020</span>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2020</span>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2020</span>
              </li>
            </ul>
          </div>

          <div className='box'>
            <h2>NEWSLETTER</h2>
            <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>

            <input type='text' name='' id='' />
            <input type='text' className='primary-btn' value='INSCREVA-SE' />
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>© 2024 Todos os direitos reservados.</p> <strong>Eric Galvão</strong>
      </div>
    </>
  )
}

export default Footer
