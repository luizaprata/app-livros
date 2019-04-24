import React, { Component } from 'react'
import FichaLivro from '../../components/ficha-livro/FichaLivro'
import { Livro } from '../../entities/Livro'
import { buscarLivrosMock } from '../../services/livros/api'

import {
  Container,
  EstanteContainer,
  LancamentosContainer,
} from './Estante.style'

interface State {
  livros: Livro[]
  buscaLivrosErro: boolean
  buscaLivrosMensagemErro: string
}

class Estante extends Component<any, State> {
  anoAtual: number

  state = {
    livros: [],
    buscaLivrosErro: false,
    buscaLivrosMensagemErro: '',
  }

  constructor(props) {
    super(props)
    buscarLivrosMock(this.sucessoBuscaLivros, this.erroBuscaLivros)
    this.anoAtual = new Date().getFullYear()
  }

  erroBuscaLivros = (mensagem: string) => {
    this.setState({
      buscaLivrosErro: true,
      buscaLivrosMensagemErro: mensagem,
    })
  }

  sucessoBuscaLivros = (livros: Livro[]) => {
    // eslint-disable-next-line
    console.log('sucesso', livros)

    this.setState({
      livros,
    })
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
    return this.state.livros.map((livro, i) => {
      return <FichaLivro key={i} livro={livro} />
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
