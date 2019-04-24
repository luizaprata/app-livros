import * as React from 'react'
import './App.css'
import { Livro } from './entities/Livro'
import { salvarReservaLivros } from './services/livros/api'

import Estante from './containers/estante/Estante'

interface State {
  reservaRealizada: boolean
  reservaMensagem: string
}

class App extends React.Component<any, State> {
  constructor(props) {
    super(props)

    this.state = {
      reservaRealizada: false,
      reservaMensagem: '',
    }
  }
  salvarReservaSucesso(mensagem: string) {
    this.setState({ reservaRealizada: true, reservaMensagem: mensagem })
  }
  salvarReservaErro(err: string) {
    this.setState({ reservaRealizada: false, reservaMensagem: err })
  }
  salvarReserva = (livros: Livro[]) => {
    salvarReservaLivros(
      livros,
      this.salvarReservaSucesso,
      this.salvarReservaErro,
    )
  }
  renderEstante = () => {
    if (!this.state.reservaRealizada) {
      return null
    }
    return <Estante clickReserva={this.salvarReserva} />
  }
  render() {
    return <div className="App">{this.renderEstante()}</div>
  }
}

export default App
