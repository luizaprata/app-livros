import React from 'react'
import { shallow, configure } from 'enzyme'
import FichaLivro from '../FichaLivro'
import Adapter from 'enzyme-adapter-react-16'
import { wrap } from 'module'

configure({ adapter: new Adapter() })

describe('<FichaLivro />', () => {
  let wrapper
  let instance
  let clickMock = jest.fn().mockReturnValue({
    preventDefault: jest.fn(),
  })
  let livro = {
    anoLancamento: 2000,
    id: '',
    sinopse: 'sinopse',
    titulo: 'titulo',
  }
  beforeEach(() => {
    wrapper = shallow(<FichaLivro livro={livro} />)
    instance = wrapper.instance()
  })

  test('DEVE chamar alternar a exibicao da sinopse para verdadeiro QUANDO clicar na ficha', () => {
    instance.setState({ expandido: false })
    wrapper.props().onClick()
    expect(instance.state.expandido).toBeTruthy()
  })
})
