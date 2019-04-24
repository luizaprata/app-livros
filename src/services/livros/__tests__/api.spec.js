global.fetch = require('jest-fetch-mock')

import { buscarLivros } from '../api'

describe('buscarLivros', () => {
  let response
  let respostaSucesso = jest.fn()
  let respostaErro = jest.fn()

  beforeEach(() => {
    fetch.resetMocks()
    respostaSucesso.mockReset()
    respostaErro.mockReset()
  })

  test('quando a api retornar a lista de livros, deve chamar o retorno de sucesso com a lista', async () => {
    fetch.mockResponseOnce(JSON.stringify([{}]))
    await buscarLivros(respostaSucesso, respostaErro)
    expect(respostaSucesso).toBeCalledWith([{}])
  })

  test('quando a api retornar uma falha de negócio, deve chamar o retorno de erro com a mensagem de erro', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({ Sucesso: false, Mensagem: 'Não há livros disponíveis' }),
    )
    await buscarLivros(respostaSucesso, respostaErro)
    expect(respostaErro).toBeCalledWith('Não há livros disponíveis')
  })

  test('quando a api falhar a requisição, deve chamar o retorno da falha com a mensagem de erro', async () => {
    fetch.mockReject(new Error('fatal error'))
    await buscarLivros(respostaSucesso, respostaErro)
    expect(respostaErro).toBeCalledWith(
      'Desculpa, ocorreu uma falha nos nossos serviços. Tente mais tarde',
    )
  })
})
