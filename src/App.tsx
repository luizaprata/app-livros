import * as React from 'react'
import './App.css'
import Estante from './containers/estante/Estante'

class App extends React.Component<any> {
  render() {
    return (
      <div className="App">
        <Estante />
      </div>
    )
  }
}

export default App
