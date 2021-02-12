import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import Digimon from './Digimon';
// import Digimon from './Digimon';
// import Digimon from './Digimon';

describe('Teste da aplicação toda', () => {
  afterEach(() => jest.clearAllMocks());

  it('renders App', async () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders a form with input type text and button', async () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId('input');
    const button = getByTestId('buttonSearch');
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  })

  it('changes input value when type a name', async () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId('input');
    fireEvent.change(input, { target: { value: 'Agumon' } });
    // console.log(input.value);
    expect(input.value).toBe('Agumon');
  })

  it('fetches a digimon given a name typed on input', async () => {
    const digimon = [
      {
        name: 'Agumon',
        level: 'Rookie',
        img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
      }
    ]

    // const digimon = {
    //   digimon: {
    //     name: 'Agumon',
    //     level: 'Rookie',
    //     img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
    //   }
    // }
    
    jest.spyOn(global, 'fetch');
    global.fetch = jest.fn().mockResolvedValue({
      json: async () => digimon
    })
    
    const { findByTestId, findByAltText, getByTestId } = render(<App />);

    const input = await findByTestId('input');
    const button = await findByTestId('buttonSearch');
    console.log(input.value);
    fireEvent.change(input, { target: { value: 'Agumon' } });
    expect(input.value).toBe('Agumon');

    fireEvent.click(button);
    // // render(<Digimon digimon={digimon}/>)
    const name = await findByTestId('digimonName');
    const level = await findByTestId('digimonLevel');
    const image = await findByAltText(digimon[0].name);

    expect(name).toBeInTheDocument();
    expect(level).toBeInTheDocument();
    expect(image).toBeInTheDocument();

    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('https://digimon-api.vercel.app/api/digimon/name/Agumon')


  });

});

