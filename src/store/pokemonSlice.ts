import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemons, getPokemonTypes, getPokemonsByType } from '../utils/api';

interface PokemonState {
  pokemons: any[];
  types: any[];
  loading: boolean;
  error: string | null;
  selectedType: string;
}

const initialState: PokemonState = {
  pokemons: [],
  types: [],
  loading: false,
  error: null,
  selectedType: 'all'
};

export const fetchPokemons = createAsyncThunk('pokemon/fetchPokemons', async (_, { getState }: any) => {
  const { selectedType } = getState().pokemon;
  if (selectedType === 'all') {
    const data = await getPokemons();
    return data.results;
  } else {
    const data = await getPokemonsByType(selectedType);
    return data.pokemon.map((p: any) => p.pokemon);
  }
});

export const fetchTypes = createAsyncThunk('pokemon/fetchTypes', async () => {
  const data = await getPokemonTypes();
  return data.results;
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setSelectedType(state, action) {
      state.selectedType = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemons = action.payload;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch pokemons';
      })
      .addCase(fetchTypes.fulfilled, (state, action) => {
        state.types = action.payload;
      });
  }
});

export const { setSelectedType } = pokemonSlice.actions;
export default pokemonSlice.reducer;