import React from 'react'
import { shallow, configure } from 'enzyme'
import { FichaLivro } from '../FichaLivro'

describe('<FichaLivro />', () => {
  let wrapper
  let fichaLivro
  let livro = {
    id: '',
    titulo: 'titulo',
    sinopse: 'sinopse',
    anoLancamento: 2000,
  }
  beforeEach(() => {
    wrapper = shallow(<FichaLivro livro={livro} />)
    fichaLivro = wrapper.instance()
  })

  test('DEVERA chamar alternar a exibicao da sinopse QUANDO o clicar na ficha', () => {
    fichaLivro.setState({
      expandido: false,
    })
  })
})
