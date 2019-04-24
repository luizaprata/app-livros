import React, { Component } from 'react'
import FichaLivro from '../../components/ficha-livro/FichaLivro'
import { Livro } from '../../entities/Livro'

import {
  Container,
  EstanteContainer,
  LancamentosContainer,
} from './Estante.style'

interface State {
  livros: Livro[]
}

class Estante extends Component<any, State> {
  anoAtual: number

  constructor(props) {
    super(props)

    this.state = {
      livros: [
        { id: '', titulo: 'titulo', sinopse: 'sinopse', anoLancamento: 2000 },
      ],
    }

    this.anoAtual = new Date().getFullYear()
  }

  totalLivrosLancamento = () => {
    return this.state.livros.filter(
      (l: Livro) => l.anoLancamento === this.anoAtual,
    ).length
  }

  totalLivros = () => {
    return this.state.livros.length
  }

  renderFichaLivros = () => {
    return this.state.livros.map((livro) => {
      return <FichaLivro key={livro.id} livro={livro} />
    })
  }

  render() {
    return (
      <Container>
        <LancamentosContainer>
          {`${this.totalLivrosLancamento()} dos ${this.totalLivros()} livros são lançamentos`}
        </LancamentosContainer>
        <EstanteContainer>{this.renderFichaLivros()}</EstanteContainer>
      </Container>
    )
  }
}

export default Estante
