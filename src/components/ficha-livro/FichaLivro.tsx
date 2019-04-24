import React, { Component, MouseEvent } from 'react'
import { Livro } from '../../entities/Livro'
import * as styles from './FichaLivro.style'

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

  alternaExpandido = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()

    this.setState({
      expandido: !this.state.expandido,
    })
  }

  render() {
    const { titulo, sinopse, anoLancamento } = this.props.livro
    return (
      <div onClick={this.alternaExpandido} style={styles.container}>
        <div>{titulo}</div>
        <div>{anoLancamento}</div>
        <div>{this.renderSinopse(sinopse)}</div>
      </div>
    )
  }
}

export default FichaLivro
