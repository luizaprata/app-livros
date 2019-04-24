import * as React from 'react'
import './App.css'

import Estante from './containers/estante/Estante'

class App extends React.Component<any> {
  fazerReserva = () => {}
  render() {
    return (
      <div className="App">
        <Estante clickFazerReserva={this.fazerReserva} />
      </div>
    )
  }
}

export default App
