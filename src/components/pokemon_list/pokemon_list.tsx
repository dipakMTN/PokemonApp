import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPokemons, setPageOffset} from '../../store/pokemonSlice';
import {RootState} from '../../store/store';
import PokemonListView from './list/pokemon_list_view';
import PokemonGridView from './grid/pokemon_grid_view';
import { styles } from './pokemon_list.styles';

const PokemonList = () => {
  const dispatch = useDispatch();
  const {pokemons, loading, error, pageOffset} = useSelector(
    (state: RootState) => state.pokemon,
  );
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);

  const [pageIndex, setPageIndex] = useState<number>(0);
  const itemsPerPage = 50;

  const loadMorePokemons = () => {
    dispatch(setPageOffset(pageIndex + 1));
    setPageIndex(pageIndex + 1);
  };

  useEffect(() => {
    dispatch(fetchPokemons(itemsPerPage));
  }, [dispatch, pageOffset]);

  useEffect(() => {
    console.log('Pokemon List size ::: ', pokemons.length)
    setFilteredPokemons(
        pokemons.filter(pokemon =>
          pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      );
  }, [searchQuery, pokemons]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Pokémon"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={styles.viewToggle}>
        <TouchableOpacity onPress={() => setViewMode('list')}>
          <Text
            style={viewMode === 'list' ? styles.selected : styles.unselected}>
            List View
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setViewMode('grid')}>
          <Text
            style={viewMode === 'grid' ? styles.selected : styles.unselected}>
            Grid View
          </Text>
        </TouchableOpacity>
      </View>
      {viewMode === 'list' ? (
        <PokemonListView
          pokemons={filteredPokemons}
          loadMorePokemons={loadMorePokemons}
        />
      ) : (
        <PokemonGridView
          pokemons={filteredPokemons}
          loadMorePokemons={loadMorePokemons}
        />
      )}
      
    </View>
  );
};

export default PokemonList