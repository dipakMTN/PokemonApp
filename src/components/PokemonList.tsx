import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons } from '../store/pokemonSlice';
import { RootState } from '../store/store';
import PokemonListView from './PokemonListView';
import PokemonGridView from './PokemonGridView';

const PokemonList = () => {
  const dispatch = useDispatch();
  const { pokemons, loading, error } = useSelector((state: RootState) => state.pokemon);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  useEffect(() => {
    setFilteredPokemons(
      pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
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
          <Text style={viewMode === 'list' ? styles.selected : styles.unselected}>List View</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setViewMode('grid')}>
          <Text style={viewMode === 'grid' ? styles.selected : styles.unselected}>Grid View</Text>
        </TouchableOpacity>
      </View>
      {viewMode === 'list' ? (
        <PokemonListView pokemons={filteredPokemons} />
      ) : (
        <PokemonGridView pokemons={filteredPokemons} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    margin: 10,
  },
  viewToggle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  selected: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
  unselected: {
    color: '#007AFF',
  },
});

export default PokemonList;
