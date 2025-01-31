import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, soy <strong>Washington Nieto</strong>, Ingeniero de sistemas y 
        <strong>desarrollador web</strong> vivo en Bogotá, Colombia 
        y ofrezco mis servicios de <strong>programación</strong> en todo 
        tipo de proyectos web.
      </h1>
      <h2>
        Te ayudo a crea tu sitio o aplicación web, tener más visibilidad
        y relevancia en internet. <Link to="/contacto">Contacta conmigo.</Link>
      </h2>

      <section className='lasts-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos desarrollados</p>

        <div className='works'>

        </div>

      </section>
    </div>
  )
}
