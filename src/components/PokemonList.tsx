import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons } from '../store/pokemonSlice';
import { RootState } from '../store/store';

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
      <FlatList
        data={filteredPokemons}
        numColumns={viewMode === 'grid' ? 2 : 1}
        key={viewMode}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.pokemonItem}>
            {/* <Image source={{ uri: item.url }} style={styles.pokemonImage} /> */}
            <Text style={styles.pokemonText}>{item.name}</Text>
          </View>
        )}
      />
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
  pokemonItem: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  pokemonText: {
    color: '#000',
  },
  pokemonImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default PokemonList;
