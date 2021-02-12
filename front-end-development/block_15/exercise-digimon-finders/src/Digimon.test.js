import React from 'react';
import { render } from '@testing-library/react';
import Digimon from './Digimon';

describe('Teste da tela do Digimon', () => {
  afterEach(() => jest.clearAllMocks());
  it('renders Digimon', async () => {
    const digimon = {
      name: 'Agumon',
      level: 'Rookie',
      img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
    }

    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(digimon),
    });

    const { findByTestId, findByAltText } = render(<Digimon digimon={digimon}/>);

    const name = await findByTestId('digimonName');
    const level = await findByTestId('digimonLevel');
    const image = await findByAltText(digimon.name);

    expect(name).toBeInTheDocument();
    expect(level).toBeInTheDocument();
    expect(image).toBeInTheDocument();

    // ERRADO !!!
    // const name = getByTestId('digimonName');
    // const level = getByTestId('digimonLevel');
    // const image = getByRole('img');
    
    // expect(name).toBeInTheDocument();
    // // expect(name).toBeVisible();
    // expect(level).toBeInTheDocument();
    // // expect(level).toBeVisible();
    // expect(image).toBeInTheDocument();
    // // expect(image).toBeVisible();
  });
});