import React from "react"
import "./download.css"

const Download = () => {
  return (
    <>
      <section className='download top'>
        <div className='container flex_space'>
          <div className='row'>
            <h3>Baixe nosso aplicativo!</h3>
            <h1>Uau! Obtenha este aplicativo para seu celular.</h1>
            <ul>
              <li>&#10003; Encontre um hotel próximo em sua rede com o aplicativo</li>
              <li>&#10003; Obtenha confirmação sem papel</li>
              <li>&#10003; Faça alterações quando e onde quiser</li>
              <li>&#10003; Atendimento ao cliente 24 horas por dia, 7 dias por semana, em mais de 40 idiomas</li>
              <li>&#10003; Sem taxas de reserva ou cartão de crédito</li>
              <li>&#10003; Adicione seus próprios comentários e fotos</li>
            </ul>
            <div className='img flex'>
              <img src='/images/appstore-button.png' alt='' />
              <img src='/images/google-play-button.png' alt='' />
            </div>
          </div>
          <div className='row row2'>
            <img src='/images/app-image-1.png' alt='' className='image' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Download
