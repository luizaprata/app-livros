import { API_URL, IS_DEV_ENV } from '../../environment'
import { Livro } from '../../entities/Livro'

export const buscarLivros = async (
  respostaSucesso: (livros: Livro[]) => void,
  respostaErro: (err: Object) => void,
) => {
  try {
    const response = await fetch(API_URL + 'livros', {
      method: 'GET',
      mode: IS_DEV_ENV ? 'cors' : 'same-origin',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
    const livros = (await response.json()) as Livro[]
    respostaSucesso(livros)
  } catch (err) {
    /* tslint:disable */
    console.error(err)
    respostaErro(err)
  }
}
