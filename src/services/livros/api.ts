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
    respostaErro(
      'Desculpa, ocorreu uma falha nos nossos serviços. Tente mais tarde',
    )
  }
}

export const buscarLivrosMock = (
  respostaSucesso: (livros: Livro[]) => void,
  respostaErro: (err: any) => void,
) => {
  respostaSucesso([
    {
      id: 'qwe',
      titulo: 'Lorem ipsum dolor',
      sinopse:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur nostrum, temporibus illum tenetur quae velit quaerat cum, enim itaque minus soluta ut repellat praesentium. Numquam cum nemo beatae nihil tempora.',
      anoLancamento: 2000,
    },
    {
      id: 'asd',
      titulo: 'In eveniet',
      sinopse:
        'In eveniet, dolorem adipisci placeat molestias quisquam minus nihil harum cupiditate saepe enim doloremque ullam. Nostrum explicabo, impedit ullam sint mollitia illum consequatur possimus rem vitae suscipit voluptas, et omnis.',
      anoLancamento: 1999,
    },
    {
      id: 'zxc',
      titulo: 'Totam explicabo suscipit',
      sinopse:
        'Totam explicabo suscipit voluptatibus ipsum. Velit numquam, autem, omnis corrupti quidem fugiat magni, nam perferendis quaerat sit reprehenderit. Enim tempore magnam blanditiis magni eum quae neque modi dolores, adipisci aperiam.',
      anoLancamento: 2019,
    },
  ])
}
