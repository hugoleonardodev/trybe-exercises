import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import TicTacToe from './TicTacToe';

afterEach(cleanup);

// Alguns describe já possuem a orientação do que precisa ser testado.
// Pode modifica-los mas lembre que os testes precisam testar todo o comportamento,
// das casas. 
// A funcionalidade não está pronta, portanto esse teste não passará. Crie-a.

describe("Comportamento de cada casa", () => {
  test('Ao clicar em um casa deve adicionar o símbolo apenas naquele lugar', () => {
    const {getByTestId, getAllByAltText, queryByAltText} = render(<TicTacToe />);

    // Pode modificar esse teste para se adequar a forma que estiver fazendo o jogo.
    // Aqui está simulando o clique em uma casa

    fireEvent.click(getByTestId('cell_0'));
    expect(getAllByAltText('X')).toHaveLength(1);
    expect(queryByAltText('O')).toBeNull();
    
    // Foi testado apenas um clique em uma casa
    // Agora precisa testar um segundo clique em outra casa e verificar o comportamento esperado. 

    fireEvent.click(getByTestId('cell_1'));
    expect(getAllByAltText('O')).toHaveLength(1);
    expect(queryByAltText('X')).not.toBeNull();
  });

  test("O simbolo precisa ser trocado ao clicar em uma casa para a outra, 'X' para 'O', começando com o 'X'", () => {
    const {getByTestId, getAllByAltText, queryByAltText, getByAltText} = render(<TicTacToe />);

    fireEvent.click(getByTestId('cell_0'));
    expect(getByAltText('X')).toBeInTheDocument();
    expect(getByAltText('X')).toBeVisible();
    expect(getAllByAltText('X')).toHaveLength(1);
    expect(queryByAltText('O')).toBeNull();

    fireEvent.click(getByTestId('cell_1'));
    expect(getByAltText('O')).toBeInTheDocument();
    expect(getByAltText('O')).toBeVisible();
    expect(getAllByAltText('O')).toHaveLength(1);
    expect(queryByAltText('X')).not.toBeNull();
  });

  test("Se clicar em uma casa já preenchida, o simbolo deve continuar o mesmo", () => {
    const {getByTestId, getAllByAltText, queryByAltText, getByAltText} = render(<TicTacToe />);

    fireEvent.click(getByTestId('cell_0'));
    expect(getByAltText('X')).toBeInTheDocument();
    expect(getByAltText('X')).toBeVisible();
    expect(getAllByAltText('X')).toHaveLength(1);
    expect(queryByAltText('O')).toBeNull();

    fireEvent.click(getByTestId('cell_0'));
    expect(getByAltText('X')).toBeInTheDocument();
    expect(getByAltText('X')).toBeVisible();
    expect(getAllByAltText('X')).toHaveLength(1);
    expect(queryByAltText('O')).toBeNull();

  });

  test("O simbolo das casas precisam ser mantidas, quando outra casa for clicada", () => {
    const {getByTestId, getAllByAltText, queryByAltText, getByAltText} = render(<TicTacToe />);

    fireEvent.click(getByTestId('cell_0'));
    expect(getByAltText('X')).toBeInTheDocument();
    expect(getByAltText('X')).toBeVisible();
    expect(getAllByAltText('X')).toHaveLength(1);
    expect(queryByAltText('O')).toBeNull();

    fireEvent.click(getByTestId('cell_1'));
    expect(getByAltText('O')).toBeInTheDocument();
    expect(getByAltText('O')).toBeVisible();
    expect(getAllByAltText('O')).toHaveLength(1);
    expect(getByAltText('X')).toBeInTheDocument();
    expect(getByAltText('X')).toBeVisible();
    expect(getAllByAltText('X')).toHaveLength(1);
    expect(queryByAltText('O')).not.toBeNull();

  });

  test("O simbolo não pode ser mudado se a casa for clicada duas vezes seguidas.", () => {
    const {getByTestId, getByAltText} = render(<TicTacToe />);

    fireEvent.click(getByTestId('cell_0'));
    expect(getByTestId('cell_0')).toContainElement(getByAltText('X'));

    fireEvent.click(getByTestId('cell_0'));
    expect(getByTestId('cell_0')).toContainElement(getByAltText('X'));

    fireEvent.click(getByTestId('cell_1'));
    expect(getByTestId('cell_1')).toContainElement(getByAltText('O'));

    fireEvent.click(getByTestId('cell_1'));
    expect(getByTestId('cell_1')).toContainElement(getByAltText('O'));

  });
});
