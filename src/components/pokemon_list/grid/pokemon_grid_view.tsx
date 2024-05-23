import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { styles } from './pokemon_grid_view.style';

const PokemonGridView = ({ pokemons, loadMorePokemons }: { pokemons: any[], loadMorePokemons: () => void }) => {
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <View style={styles.pokemonItem}>
          <Text style={styles.pokemonText}>{item.name}</Text>
        </View>
      )}
      onEndReached={loadMorePokemons}
      onEndReachedThreshold={0.5}
    />
  );
};


export default PokemonGridView;
