import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Header from '../../components/header/header';
import {useHomeController} from './home.controller';
import {styles} from './home.styles';
import PokemonListView from '../../components/pokemon_list/list/pokemon_list_view';
import PokemonGridView from '../../components/pokemon_list/grid/pokemon_grid_view';
import Container from '../../hoc/container';

const HomeScreen = () => {
  const {
    handleFilterPress,
    loadMorePokemons,
    viewMode,
    setViewMode,
    searchQuery,
    setSearchQuery,
    filteredPokemons,
    loading,
    error,
  } = useHomeController();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <Container>
      <Header
        title="Pokémon"
        iconSymbol="filter-list-alt"
        onIconPress={handleFilterPress}
      />
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
    </Container>
  );
}; 

export default HomeScreen;
