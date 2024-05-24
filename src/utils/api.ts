import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2';

export const getPokemons = async (itemsPerPage: number,  pageIndex: number) => {
  const response = await axios.get(`${API_URL}/pokemon`, {
    params: { limit: itemsPerPage, offset: pageIndex }
  });
  return response.data;
};

export const getPokemonTypes = async () => {
  const response = await axios.get(`${API_URL}/type`);
  return response.data;
};

export const getPokemonsByType = async (type: string) => {
  const response = await axios.get(`${API_URL}/type/${type}`);
  return response.data;
};
