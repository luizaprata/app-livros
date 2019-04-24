import React, { Component } from 'react'

import { Livro } from '../../entities/Livro'
import Button from '../../components/button/Button'
import TituloLivro from '../../components/titulo-livro/TituloLivro'

import { Container, Descricao, EstanteContainer } from './Estante.style'

interface Props {
  clickFazerReserva: (livros: Livro[]) => void
}

interface State {
  livros: Livro[]
}

class Estante extends Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      livros: [],
    }
  }

  totalLivrosSelecionados = () => {
    return this.state.livros.filter((l: Livro) => l.selecionado === true).length
  }
  totalLivros = () => {
    return this.state.livros.length
  }

  render() {
    return (
      <Container>
        <TituloLivro
          titulo="Fase de Seleção"
          descricao="Selecione os livros que deseja reservar"
        />
        <EstanteContainer>
          <Descricao>
            {`${this.totalLivrosSelecionados()} do total de ${this.totalLivros()}`}
          </Descricao>
          <Button
            title="Fazer reserva"
            onClick={() => this.props.clickFazerReserva(this.state.livros)}
          />
        </EstanteContainer>
      </Container>
    )
  }
}

export default Estante
