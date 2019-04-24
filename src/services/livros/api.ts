import { Livro } from '../../entities/Livro'
import { API_URL, IS_DEV_ENV } from '../../environment'

export const buscarLivros = async (
  respostaSucesso: (livros: Livro[]) => void,
  respostaErro: (err: any) => void,
) => {
  try {
    const response = await fetch(API_URL + 'livros', {
      method: 'GET',
      mode: IS_DEV_ENV ? 'cors' : 'same-origin',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
    const apiResponse = await response.json()
    if (apiResponse.Sucesso === false) {
      respostaErro(apiResponse.Mensagem)
    } else {
      respostaSucesso(apiResponse as Livro[])
    }
  } catch (err) {
    /* tslint:disable */
    console.error(err)
    respostaErro(err)
  }
}

export const salvarReservaLivros = async (
  livros: Livro[],
  respostaSucesso: (mensagem: string) => void,
  respostaErro: (err: any) => void,
) => {
  try {
    const response = await fetch(API_URL + 'reserva', {
      method: 'POST',
      mode: IS_DEV_ENV ? 'cors' : 'same-origin',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(livros),
    })
    const apiResponse = await response.json()
    if (!apiResponse.Sucesso) {
      respostaErro(apiResponse.Mensagem)
    } else {
      respostaSucesso('Reserva Realizada com Sucesso')
    }
  } catch (err) {
    /* tslint:disable */
    console.error(err)
    respostaErro(err)
  }
}
