import React, { useState } from "react"
import "./Contact.css"

const ContactFrom = () => {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")

  const [allValue, setAllValue] = useState([])
  const formSubmit = (e) => {
    e.preventDefault()

    const newValue = { fname, lname, phone, email, subject, company, message }
    setAllValue([...allValue, newValue])

    setFname("")
    setLname("")
    setPhone("")
    setEmail("")
    setSubject("")
    setCompany("")
    setMessage("")
  }
  return (
    <>
      <section className='contact mtop'>
        <div className='container flex'>
          <div className='main-content'>
            <h2>Contate-nos</h2>
            <p>Preencha o formulário abaixo, retornaremos em breve.</p>

            <form onSubmit={formSubmit}>
              <div className='grid1'>
                <div className='input'>
                  <span>
                    Nome <label>*</label>
                  </span>
                  <input type='text' name='fname' value={fname} onChange={(e) => setFname(e.target.value)} required />
                </div>
                <div className='input'>
                  <span>
                    Sobrenome <label>*</label>
                  </span>
                  <input type='text' name='lname' value={lname} onChange={(e) => setLname(e.target.value)} required />
                </div>
                <div className='input'>
                  <span>
                    Número <label>*</label>
                  </span>
                  <input type='number' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className='input'>
                  <span>
                    Email <label>*</label>
                  </span>
                  <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className='input'>
                  <span>Assunto</span>
                  <input type='text' name='subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>
                <div className='input'>
                  <span>Sua empresa</span>
                  <input type='text' name='company' value={company} onChange={(e) => setCompany(e.target.value)} />
                </div>
              </div>
              <div className='input inputlast'>
                <span>
                  Digite sua mensagem <label>*</label>
                </span>
                <textarea cols='30' rows='10' name='message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>
              <button className='primary-btn'>Enviar</button>
            </form>
          </div>

          <div className='side-content'>
            <h3>Visite nossa localização</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur.</p>
            <br />

            <h3>Envie-nos uma mensagem</h3>
            <span>hotel@gmail.com</span>
            <br />
            <span>+01 123 456 789</span>
            <br />

            <div className='icon'>
              <h3>Siga-nos</h3>

              <div className='flex_space'>
                <i className='fab fa-facebook-f'></i>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-linkedin'></i>
                <i className='fab fa-instagram'></i>
                <i className='fab fa-pinterest'></i>
                <i className='fab fa-youtube'></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='show-data'>
        {allValue.map((cureentValue) => {
          const { fname, lname, phone, email, subject, company, message } = cureentValue
          return (
            <>
              <div className='sign-box'>
                <h1>Mensagem enviada com sucesso!</h1>
                <h3>
                  Name : <p>{fname}</p>
                </h3>
                <h3>
                  Sobrenome : <p>{lname}</p>
                </h3>
                <h3>
                  Número : <p>{phone}</p>
                </h3>
                <h3>
                  Email : <p>{email}</p>
                </h3>
                <h3>
                  Assunto : <p>{subject}</p>
                </h3>
                <h3>
                  Empresa : <p>{company}</p>
                </h3>
                <h3>
                  Mensagem : <p>{message}</p>
                </h3>
              </div>
            </>
          )
        })}
      </section>
    </>
  )
}

export default ContactFrom
