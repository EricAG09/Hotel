import React, { useState } from "react"
import { Link } from "react-router-dom"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import "./design.css"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [recValue, setRecValue] = useState([])
  const submitForm = (e) => {
    e.preventDefault()
    const newValue = { email: email, password: password }

    setRecValue([...recValue, newValue])
    console.log(newValue)

    setEmail("")
    setPassword("")
  }
  return (
    <>
      <HeadTitle />
      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Digite seu e-mail e senha abaixo para fazer login em sua conta e usufruir dos benefícios do nosso site.</p>
            <form action='' onSubmit={submitForm}>
              <input type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
              <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Senha' />

              <div className='flex_space'>
                <div className='flex'>
                  <input type='checkbox' />
                  <label>Lembrar de mim</label>
                </div>
                <div className='flex'>
                  <span>esqueci a senha</span>
                </div>
              </div>

              <button type='submit' className='primary-btn'>
                Entrar
              </button>
              <p>
                Não possui uma conta? <Link to='/register'>Cadastrar!</Link>
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className='show-data'>
        {recValue.map((cureentValue) => {
          return (
            <>
              <div className='sign-box'>
                <h1>Logado com sucesso</h1>
                <h3>
                  Email : <p>{cureentValue.email}</p>
                </h3>
                <h3>
                  Senha : <p>{cureentValue.password}</p>
                </h3>
              </div>
            </>
          )
        })}
      </section>
    </>
  )
}

export default Login
