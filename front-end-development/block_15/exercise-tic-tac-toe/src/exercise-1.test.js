import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import TicTacToe from './TicTacToe';

afterEach(cleanup);

describe("Configuração inicial do jogo", () => {
  render(<TicTacToe />)
  test('Verificar se foi renderizada nove casas', () => {
    // render(<TicTacToe />)
    const cells = screen.queryAllByTestId(/cell_/)
    expect(cells.length).toBe(9)
    cells.forEach((cell) => expect(cell).toBeInTheDocument())
    // const blocks = getAllByTestId('cell_') errado: usar query
  });

  test('Começar com todos os espaços em branco.', () => {
    // render(<TicTacToe />)
    const cells = screen.queryAllByTestId(/cell_/)
    cells.forEach((cell) => expect(cell).not.toHaveTextContent())
  });

  test("Começar sem a frase 'Fim de jogo'", () => {
    // render(<TicTacToe />)
    const message = screen.queryByText('Fim de jogo')
    console.log(message)
    expect(message).toBe(null)
    expect(message).not.toBeInTheDocument()
    // const endGameMessage = getByText('Fim de jogo')
    // console.log(endGameMessage)
    // expect(endGameMessage).toBe(undefined)
  });
});
