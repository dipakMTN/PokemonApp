import { Pokemon, PokemonType } from '@/types';
import { getPokemonTypes, getPokemons, getPokemonsByType } from '@/utils/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface PokemonState {
  pokemons: Pokemon[];
  types: PokemonType[];
  loading: boolean;
  error: string | null;
  selectedType: string;
  pageOffset: number,
}

const initialState: PokemonState = {
  pokemons: [],
  types: [],
  loading: false,
  error: null,
  selectedType: 'all',
  pageOffset: 0,
};

export const fetchPokemons = createAsyncThunk('pokemon/fetchPokemons', async (itemsPerPage: number, { getState }: any) => {
  const { selectedType, pageOffset } = getState().pokemon;

  if (selectedType === 'all') {
    const data = await getPokemons(itemsPerPage, pageOffset);
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
      state.pageOffset = 0;
      state.pokemons = []
    },
    setPageOffset(state, action) {
      state.pageOffset = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemons = [...state.pokemons, ...action.payload];
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

export const { setSelectedType, setPageOffset } = pokemonSlice.actions;
export default pokemonSlice.reducer;
