import React from 'react'

import * as styles from './TituloLivro.style'

export interface TituloLivro {
  titulo?: string
  descricao?: string
}

const TituloLivro = ({ titulo, descricao }: TituloLivro) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>{titulo}</h1>
      <div style={styles.linha} />
      <p style={styles.descricao}>{descricao}</p>
    </div>
  )
}

export default TituloLivro
