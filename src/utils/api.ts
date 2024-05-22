import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2';

export const getPokemons = async (limit = 20, offset = 0) => {
  const response = await axios.get(`${API_URL}/pokemon`, {
    params: { limit, offset }
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
