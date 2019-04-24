import React from 'react'
import Estante from '../Estante'
import { Livro } from '../../../entities/Livro'

test('jest fumaca', () => {
  expect(true).toBeTruthy()
})

describe('Estante', () => {
  let estante
  beforeAll(() => {
    estante = new Estante()
  })

  describe('totalLivrosLancamento', () => {
    beforeAll(() => {
      estante.anoAtual = 2000
    })

    test('DEVERA retornar o total da lista de livros selecionados', () => {
      estante.state.livros = [{ anoLancamento: 1999 }, { anoLancamento: 2000 }]
      const total = estante.totalLivrosLancamento()
      expect(total).toBe(1)
    })

    test('DEVERA retornar 0 QUANDO a lista de livros for vazia', () => {
      estante.state.livros = []
      const total = estante.totalLivrosLancamento()
      expect(total).toBe(0)
    })
  })

  describe('totalLivros', () => {
    test('DEVERA retornar o total da lista de livros', () => {
      estante.state.livros = [{}, {}]
      const total = estante.totalLivros()
      expect(total).toBe(2)
    })

    test('DEVERA retornar 0 QUANDO a lista de livros for vazia', () => {
      estante.state.livros = []
      const total = estante.totalLivros()
      expect(total).toBe(0)
    })
  })
})
