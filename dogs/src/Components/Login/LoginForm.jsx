import React from 'react'
import { Link } from 'react-router-dom'

export const LoginForm = () => {
  return (
    <div>
      <h3>LoginForm</h3>
      <Link to="/login/criar">Cadastrar</Link>
    </div>
  )
}
