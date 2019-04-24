import React, { Component } from 'react'
import { Livro } from '../../entities/Livro'

interface Props {
  livro: Livro
}

interface State {
  expandido: boolean
}

class FichaLivro extends Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      expandido: false,
    }
  }

  renderSinopse(sinopse: string) {
    if (!this.state.expandido) {
      return null
    }
    return <div>{sinopse}</div>
  }

  render() {
    const { titulo, sinopse, anoLancamento } = this.props.livro
    return (
      <div>
        <div>{titulo}</div>
        <div>{anoLancamento}</div>
        <div>{this.renderSinopse(sinopse)}</div>
      </div>
    )
  }
}

export default FichaLivro
